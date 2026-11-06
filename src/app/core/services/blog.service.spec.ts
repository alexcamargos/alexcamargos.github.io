import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { BlogService } from './blog.service';
import { Article } from '../models/article.model';

describe('BlogService', () => {
  let service: BlogService;
  let httpTesting: HttpTestingController;

  const mockArticles: Article[] = [
    {
      slug: 'artigo-um',
      title: 'Artigo Um',
      description: 'Resumo do artigo um',
      date: '2026-11-04',
      published: true,
      featured: true,
      tags: ['python', 'datascience'],
      canonical_url: 'https://alcamargos.com/blog/artigo-um',
      devto_id: null,
      readingTime: 3,
      contentPath: 'assets/content/articles/artigo-um.md'
    },
    {
      slug: 'artigo-dois',
      title: 'Artigo Dois',
      description: 'Resumo do artigo dois',
      date: '2026-11-02',
      published: false,
      featured: true,
      tags: ['sql'],
      canonical_url: 'https://alcamargos.com/blog/artigo-dois',
      devto_id: null,
      readingTime: 2,
      contentPath: 'assets/content/articles/artigo-dois.md'
    },
    {
      slug: 'artigo-tres',
      title: 'Artigo Tres',
      description: 'Resumo do artigo tres',
      date: '2026-10-28',
      published: true,
      featured: false,
      tags: ['angular'],
      canonical_url: 'https://alcamargos.com/blog/artigo-tres',
      devto_id: null,
      readingTime: 4,
      contentPath: 'assets/content/articles/artigo-tres.md'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(BlogService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('deve ser instanciado corretamente', () => {
    expect(service).toBeTruthy();
    expect(service.articles().length).toBe(0);
    expect(service.isLoading()).toBe(false);
  });

  it('deve carregar artigos e atualizar sinais derivados', async () => {
    const loadPromise = firstValueFrom(service.loadArticles());

    const req = httpTesting.expectOne('assets/content/articles.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockArticles);

    const articles = await loadPromise;
    expect(articles.length).toBe(3);
    expect(service.articles().length).toBe(3);
    expect(service.publishedArticles().length).toBe(2);
    expect(service.featuredArticles().length).toBe(1);
    expect(service.isLoading()).toBe(false);
  });

  it('deve tratar erro na requisicao de artigos', async () => {
    const loadPromise = firstValueFrom(service.loadArticles());

    const req = httpTesting.expectOne('assets/content/articles.json');
    req.error(new ProgressEvent('error'), { status: 404, statusText: 'Not Found' });

    const articles = await loadPromise;
    expect(articles).toEqual([]);
    expect(service.error()).toBeTruthy();
    expect(service.isLoading()).toBe(false);
  });

  it('deve recuperar artigo por slug', () => {
    service.articles.set(mockArticles);
    const found = service.getArticleBySlug('artigo-um');
    expect(found).toBeDefined();
    expect(found?.title).toBe('Artigo Um');

    const notFound = service.getArticleBySlug('inexistente');
    expect(notFound).toBeUndefined();
  });

  it('deve requisitar o conteudo markdown de um artigo', async () => {
    const markdownContent = '# Titulo\nConteudo';
    const contentPromise = firstValueFrom(service.getArticleContent('artigo-um'));

    const req = httpTesting.expectOne('assets/content/articles/artigo-um.md');
    expect(req.request.method).toBe('GET');
    req.flush(markdownContent);

    const content = await contentPromise;
    expect(content).toBe(markdownContent);
  });
});
