import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { provideMarkdown } from 'ngx-markdown';
import { PostDetailComponent } from './post-detail';
import { BlogService } from '../../../core/services/blog.service';
import { Article } from '../../../core/models/article.model';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockBlogService: Partial<BlogService>;

  const mockArticle: Article = {
    slug: 'meu-artigo-teste',
    title: 'Titulo de Teste',
    description: 'Resumo de teste',
    date: '2026-11-04',
    published: true,
    featured: true,
    tags: ['angular', 'vitest'],
    canonical_url: 'https://alcamargos.com/blog/meu-artigo-teste',
    devto_id: 999,
    readingTime: 3,
    contentPath: 'assets/content/articles/meu-artigo-teste.md'
  };

  const rawMarkdownMock = `---
title: "Titulo de Teste"
description: "Resumo de teste"
---

# Titulo de Teste

Paragrafo de conteudo do artigo.`;

  beforeAll(() => {
    (globalThis as any).katex = {
      renderToString: (tex: string) => `<span class="katex">${tex}</span>`
    };
    (globalThis as any).renderMathInElement = (el: HTMLElement) => el;
    (globalThis as any).Prism = {
      highlightAllUnder: () => {}
    };
  });

  beforeEach(async () => {
    mockBlogService = {
      loadArticles: () => of([mockArticle]),
      getArticleBySlug: (slug: string) => (slug === 'meu-artigo-teste' ? mockArticle : undefined),
      getArticleContent: (slug: string) =>
        slug === 'meu-artigo-teste' ? of(rawMarkdownMock) : throwError(() => new Error('Not found'))
    };

    await TestBed.configureTestingModule({
      imports: [PostDetailComponent, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideMarkdown(),
        { provide: BlogService, useValue: mockBlogService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
  });

  it('deve ser instanciado corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar o artigo e limpar o frontmatter do markdown', () => {
    fixture.componentRef.setInput('slug', 'meu-artigo-teste');
    fixture.detectChanges();

    expect(component.isLoading()).toBe(false);
    expect(component.notFound()).toBe(false);
    expect(component.article()?.title).toBe('Titulo de Teste');
    expect(component.cleanMarkdown()).toContain('# Titulo de Teste');
    expect(component.cleanMarkdown()).not.toContain('---');
  });

  it('deve sinalizar notFound quando slug nao existir', () => {
    fixture.componentRef.setInput('slug', 'slug-inexistente');
    fixture.detectChanges();

    expect(component.isLoading()).toBe(false);
    expect(component.notFound()).toBe(true);
    expect(component.article()).toBeNull();
  });
});
