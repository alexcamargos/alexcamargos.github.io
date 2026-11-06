/**
 * Utilitários para formatação padronizada e acessível de datas de artigos.
 */

/**
 * Formata data no padrão longo editorial (ex.: "02 de nov., 2026" ou "Nov 02, 2026").
 * @param dateStr Data no formato ISO YYYY-MM-DD.
 * @param locale Idioma desejado (padrão 'pt-BR').
 */
export function formatArticleDate(dateStr: string, locale: string = 'pt-BR'): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-').map(Number);
  if (parts.length < 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
    return dateStr;
  }
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

/**
 * Formata data no padrão tabular abreviado (ex.: "04 Nov").
 * @param dateStr Data no formato ISO YYYY-MM-DD.
 * @param locale Idioma desejado (padrão 'pt-BR').
 */
export function formatShortArticleDate(dateStr: string, locale: string = 'pt-BR'): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-').map(Number);
  if (parts.length < 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
    return dateStr;
  }
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC'
  }).format(date);
}
