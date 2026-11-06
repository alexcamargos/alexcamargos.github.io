import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturedSectionComponent } from './featured-section';
import { Article } from '../../../../core/models/article.model';

describe('FeaturedSectionComponent', () => {
  let component: FeaturedSectionComponent;
  let fixture: ComponentFixture<FeaturedSectionComponent>;

  const mockArticles: Article[] = [
    {
      slug: 'post-1',
      title: 'Post 1',
      description: 'Desc 1',
      date: '2026-11-04',
      published: true,
      featured: true,
      tags: ['data', 'python'],
      canonical_url: 'https://alcamargos.com/blog/post-1',
      devto_id: null,
      readingTime: 2,
      contentPath: 'assets/content/articles/post-1.md'
    },
    {
      slug: 'post-2',
      title: 'Post 2',
      description: 'Desc 2',
      date: '2026-11-03',
      published: true,
      featured: true,
      tags: ['sql'],
      canonical_url: 'https://alcamargos.com/blog/post-2',
      devto_id: null,
      readingTime: 3,
      contentPath: 'assets/content/articles/post-2.md'
    },
    {
      slug: 'post-3',
      title: 'Post 3',
      description: 'Desc 3',
      date: '2026-11-02',
      published: true,
      featured: true,
      tags: ['duckdb'],
      canonical_url: 'https://alcamargos.com/blog/post-3',
      devto_id: null,
      readingTime: 1,
      contentPath: 'assets/content/articles/post-3.md'
    },
    {
      slug: 'post-4',
      title: 'Post 4',
      description: 'Desc 4',
      date: '2026-11-01',
      published: true,
      featured: true,
      tags: ['angular'],
      canonical_url: 'https://alcamargos.com/blog/post-4',
      devto_id: null,
      readingTime: 4,
      contentPath: 'assets/content/articles/post-4.md'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSectionComponent, TranslateModule.forRoot()],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedSectionComponent);
    component = fixture.componentInstance;
  });

  it('deve ser instanciado corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve paginar os artigos e calcular contador acessivel', () => {
    fixture.componentRef.setInput('articles', mockArticles);
    fixture.detectChanges();

    expect(component.visibleArticles().length).toBe(3);
    expect(component.counterText()).toBe('1–3 de 4');
    expect(component.canPrev()).toBe(false);
    expect(component.canNext()).toBe(true);

    component.next();
    fixture.detectChanges();

    expect(component.currentPage()).toBe(1);
    expect(component.visibleArticles().length).toBe(1);
    expect(component.visibleArticles()[0].slug).toBe('post-4');
    expect(component.counterText()).toBe('4–4 de 4');
    expect(component.canPrev()).toBe(true);
    expect(component.canNext()).toBe(false);

    component.prev();
    fixture.detectChanges();

    expect(component.currentPage()).toBe(0);
    expect(component.visibleArticles().length).toBe(3);
  });

  it('deve retornar texto zero quando lista for vazia', () => {
    fixture.componentRef.setInput('articles', []);
    fixture.detectChanges();

    expect(component.counterText()).toBe('0 de 0');
    expect(component.visibleArticles().length).toBe(0);
  });
});
