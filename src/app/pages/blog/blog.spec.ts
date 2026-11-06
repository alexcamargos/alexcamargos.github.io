import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { BlogComponent } from './blog';
import { BlogService } from '../../core/services/blog.service';
import { Article } from '../../core/models/article.model';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let mockBlogService: Partial<BlogService>;

  const mockArticles: Article[] = [
    {
      slug: 'artigo-um',
      title: 'Artigo Um',
      description: 'Descricao do artigo um',
      date: '2026-11-04',
      published: true,
      featured: true,
      tags: ['python'],
      canonical_url: 'https://alcamargos.com/blog/artigo-um',
      devto_id: null,
      readingTime: 2,
      contentPath: 'assets/content/articles/artigo-um.md'
    },
    {
      slug: 'artigo-dois',
      title: 'Artigo Dois',
      description: 'Descricao do artigo dois',
      date: '2026-11-02',
      published: true,
      featured: false,
      tags: ['duckdb'],
      canonical_url: 'https://alcamargos.com/blog/artigo-dois',
      devto_id: null,
      readingTime: 3,
      contentPath: 'assets/content/articles/artigo-dois.md'
    }
  ];

  beforeEach(async () => {
    const blogServiceSignalMock = {
      articles: () => mockArticles,
      publishedArticles: () => mockArticles,
      featuredArticles: () => [mockArticles[0]],
      isLoading: () => false,
      error: () => null,
      loadArticles: () => of(mockArticles)
    };
    mockBlogService = blogServiceSignalMock as unknown as BlogService;

    await TestBed.configureTestingModule({
      imports: [BlogComponent, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        { provide: BlogService, useValue: mockBlogService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado e carregar artigos', () => {
    expect(component).toBeTruthy();
    expect(component.articles().length).toBe(2);
    expect(component.featuredArticles().length).toBe(1);
  });

  it('deve renderizar a secao de destaques e as linhas editoriais', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-featured-section')).toBeTruthy();
    expect(compiled.querySelectorAll('app-post-list-row').length).toBe(2);
  });
});
