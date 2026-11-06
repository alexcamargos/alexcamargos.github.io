#!/usr/bin/env node

/**
 * Script de sincronizacao de artigos locais com a API do Dev.to (Forem).
 * Mantem o repositorio Git como Single Source of Truth e sincroniza
 * titulos, descricoes, tags, corpo do artigo e URL canonica para SEO.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ARTICLES_DIR = path.resolve(__dirname, '../src/assets/content/articles');
const BASE_CANONICAL_URL = 'https://alcamargos.com/blog';
const DEVTO_API_BASE = 'https://dev.to/api/articles';

/**
 * Pausa a execucao por determinado periodo em milissegundos.
 * @param {number} ms 
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Sanitiza tags para o formato estrito exigido pelo Dev.to:
 * Apenas caracteres alfanumericos, minusculas, maximo de 4 tags.
 * @param {string[]} rawTags
 * @returns {string[]}
 */
function sanitizeDevtoTags(rawTags) {
  if (!Array.isArray(rawTags)) return [];
  return rawTags
    .map((tag) => String(tag).replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim())
    .filter((tag) => tag.length > 0)
    .slice(0, 4);
}

/**
 * Dispara requisicao HTTP para a API do Dev.to com tratamento de Rate Limit (429).
 * @param {string} url
 * @param {object} options
 * @param {number} maxRetries
 * @returns {Promise<Response>}
 */
async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (response.status === 429) {
        const retryAfter = Number(response.headers.get('retry-after')) || 5;
        console.warn(`[Dev.to Sync] Rate limit atingido (429). Aguardando ${retryAfter}s (tentativa ${attempt}/${maxRetries})...`);
        await sleep(retryAfter * 1000);
        continue;
      }

      return response;
    } catch (err) {
      if (attempt === maxRetries) throw err;
      console.warn(`[Dev.to Sync] Falha de rede na tentativa ${attempt}. Repetindo em 2s...`);
      await sleep(2000);
    }
  }
  throw new Error(`[Dev.to Sync] Falha persistente ao acessar ${url}`);
}

/**
 * Sincroniza um unico arquivo de artigo com a API do Dev.to.
 * @param {string} filePath
 * @param {string} apiKey
 * @returns {Promise<{ updatedLocalFile: boolean, slug: string, devtoId: number }>}
 */
async function syncArticle(filePath, apiKey) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(content);
  const slug = path.basename(filePath, '.md');
  const canonicalUrl = `${BASE_CANONICAL_URL}/${slug}`;

  const payload = {
    article: {
      title: parsed.data.title,
      body_markdown: parsed.content,
      published: Boolean(parsed.data.published),
      description: parsed.data.description,
      tags: sanitizeDevtoTags(parsed.data.tags),
      canonical_url: canonicalUrl
    }
  };

  if (parsed.data.series) {
    payload.article.series = String(parsed.data.series);
  }
  if (parsed.data.cover_image) {
    payload.article.main_image = String(parsed.data.cover_image);
  }

  const existingId = parsed.data.devto_id;
  const isUpdate = existingId !== null && existingId !== undefined && existingId !== '';

  const url = isUpdate ? `${DEVTO_API_BASE}/${existingId}` : DEVTO_API_BASE;
  const method = isUpdate ? 'PUT' : 'POST';

  console.log(`[Dev.to Sync] ${method} ${slug} (ID: ${existingId || 'novo'})...`);

  const response = await fetchWithRetry(url, {
    method,
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      'User-Agent': 'alexcamargos-portfolio-sync'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`[Dev.to Sync] Erro HTTP ${response.status} ao sincronizar "${slug}": ${errorBody}`);
  }

  const responseData = await response.json();
  const newDevtoId = responseData.id;

  let updatedLocalFile = false;

  if (!isUpdate && newDevtoId) {
    console.log(`[Dev.to Sync] Artigo "${slug}" criado no Dev.to com ID: ${newDevtoId}. Atualizando frontmatter local...`);
    parsed.data.devto_id = newDevtoId;
    parsed.data.canonical_url = canonicalUrl;

    const newContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, newContent, 'utf-8');
    updatedLocalFile = true;
  }

  return { updatedLocalFile, slug, devtoId: newDevtoId || existingId };
}

/**
 * Funcao principal que orquestra a sincronizacao de todos os artigos da pasta.
 */
async function main() {
  const apiKey = process.env.DEVTO_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    console.log('[Dev.to Sync] DEVTO_API_KEY nao configurada nos segredos ou ambiente. Sincronizacao externa pulada com sucesso.');
    process.exit(0);
  }

  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`[Dev.to Sync] Diretorio nao encontrado: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('[Dev.to Sync] Nenhum artigo encontrado para sincronizar.');
    process.exit(0);
  }

  console.log(`[Dev.to Sync] Iniciando sincronizacao de ${files.length} artigos com Dev.to...`);

  let modifiedFilesCount = 0;
  let successCount = 0;
  let failureCount = 0;

  for (const file of files) {
    const fullPath = path.join(ARTICLES_DIR, file);
    try {
      const result = await syncArticle(fullPath, apiKey.trim());
      successCount++;
      if (result.updatedLocalFile) {
        modifiedFilesCount++;
      }
      // Intervalo de cortesia para evitar saturacao de rate limit (1 segundo)
      await sleep(1000);
    } catch (err) {
      console.error(`[Dev.to Sync] Erro ao sincronizar ${file}:`, err.message);
      failureCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`[Dev.to Sync] Relatorio Final:`);
  console.log(`  Sucessos: ${successCount}`);
  console.log(`  Falhas: ${failureCount}`);
  console.log(`  Arquivos locais atualizados com novo ID: ${modifiedFilesCount}`);
  console.log(`========================================\n`);

  if (failureCount > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  sanitizeDevtoTags,
  syncArticle,
  fetchWithRetry,
  sleep
};
