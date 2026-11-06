import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of, map } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly http = inject(HttpClient);

  readonly articles = signal<Article[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  readonly publishedArticles = computed(() =>
    this.articles().filter((article) => article.published)
  );

  readonly featuredArticles = computed(() =>
    this.publishedArticles().filter((article) => article.featured)
  );

  /**
   * Carrega o catálogo de artigos estruturado a partir de assets/content/articles.json.
   * Atualiza os sinais de artigos, status de carregamento e eventuais falhas.
   */
  loadArticles(): Observable<Article[]> {
    if (this.articles().length > 0) {
      return of(this.articles());
    }

    this.isLoading.set(true);
    this.error.set(null);

    return this.http.get<Article[]>('assets/content/articles.json').pipe(
      tap({
        next: (items) => {
          this.articles.set(items);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set(err?.message || 'Falha ao carregar catálogo de artigos.');
          this.isLoading.set(false);
        }
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Localiza um artigo específico pelo slug no catálogo carregado.
   * @param slug Identificador textual único do artigo.
   */
  getArticleBySlug(slug: string): Article | undefined {
    return this.articles().find((article) => article.slug === slug);
  }

  /**
   * Carrega o conteúdo bruto em Markdown do artigo indicado.
   * @param slug Identificador textual único do artigo.
   */
  getArticleContent(slug: string): Observable<string> {
    return this.http.get(`assets/content/articles/${slug}.md`, { responseType: 'text' });
  }
}
