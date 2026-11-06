#!/usr/bin/env node

/**
 * Script de indexação e pré-processamento de artigos para o blog estático.
 * Lê todos os arquivos Markdown em src/assets/content/articles/, valida o frontmatter
 * e gera o catálogo consolidado em src/assets/content/articles.json.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ARTICLES_DIR = path.resolve(__dirname, '../src/assets/content/articles');
const OUTPUT_FILE = path.resolve(__dirname, '../src/assets/content/articles.json');
const BASE_CANONICAL_URL = 'https://alcamargos.com/blog';

/**
 * Calcula o tempo estimado de leitura em minutos com base no texto puro.
 * @param {string} text - Conteúdo do artigo em Markdown.
 * @returns {number} Minutos estimados (mínimo 1).
 */
function calculateReadingTime(text) {
  const cleanText = text.replace(/```[\s\S]*?```/g, '').replace(/[#*`_~\[\]]/g, '');
  const wordCount = cleanText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Valida o frontmatter obrigatório de um artigo.
 * @param {object} data - Metadados do frontmatter.
 * @param {string} filename - Nome do arquivo para diagnóstico.
 */
function validateFrontmatter(data, filename) {
  const requiredFields = ['title', 'description', 'date', 'published', 'tags'];
  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      throw new Error(`[Erro de Validação] O arquivo "${filename}" não contém o campo obrigatório "${field}".`);
    }
  }

  if (!Array.isArray(data.tags)) {
    throw new Error(`[Erro de Validação] No arquivo "${filename}", "tags" deve ser um array.`);
  }

  const parsedDate = new Date(data.date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error(`[Erro de Validação] No arquivo "${filename}", "date" contém formato inválido: "${data.date}".`);
  }
}

function generateIndex() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
    console.log(`[Posts Indexer] Diretório criado: ${ARTICLES_DIR}`);
  }

  const files = fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith('.md'));

  if (files.length === 0) {
    console.warn(`[Posts Indexer] Nenhum artigo (.md) encontrado em ${ARTICLES_DIR}. Gerando catálogo vazio.`);
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf-8');
    return;
  }

  const articles = [];

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);

    validateFrontmatter(parsed.data, file);

    const slug = path.basename(file, '.md');
    const readingTime = calculateReadingTime(parsed.content);
    const canonical_url = parsed.data.canonical_url || `${BASE_CANONICAL_URL}/${slug}`;

    articles.push({
      slug,
      title: parsed.data.title,
      description: parsed.data.description,
      date: typeof parsed.data.date === 'string' ? parsed.data.date : parsed.data.date.toISOString().split('T')[0],
      published: Boolean(parsed.data.published),
      featured: Boolean(parsed.data.featured),
      tags: parsed.data.tags.map((tag) => String(tag).trim()),
      canonical_url,
      devto_id: parsed.data.devto_id !== undefined ? parsed.data.devto_id : null,
      series: parsed.data.series || null,
      cover_image: parsed.data.cover_image || null,
      readingTime,
      contentPath: `assets/content/articles/${file}`,
      excerpt: parsed.data.description
    });
  }

  // Ordenação cronológica decrescente (mais recentes primeiro)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articles, null, 2), 'utf-8');

  const publishedCount = articles.filter((a) => a.published).length;
  const featuredCount = articles.filter((a) => a.featured).length;

  console.log(`[Posts Indexer] Catálogo gerado com sucesso: ${OUTPUT_FILE}`);
  console.log(`[Posts Indexer] Total: ${articles.length} | Publicados: ${publishedCount} | Destaques: ${featuredCount}`);
}

generateIndex();
