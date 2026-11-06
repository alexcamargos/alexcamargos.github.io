import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PostListRowComponent } from './post-list-row';
import { Article } from '../../../../core/models/article.model';

describe('PostListRowComponent', () => {
  let component: PostListRowComponent;
  let fixture: ComponentFixture<PostListRowComponent>;

  const mockArticle: Article = {
    slug: 'post-exemplo',
    title: 'Titulo do Post Exemplo',
    description: 'Descricao concisa do post exemplo.',
    date: '2026-11-04',
    published: true,
    featured: false,
    tags: ['python', 'duckdb'],
    canonical_url: 'https://alcamargos.com/blog/post-exemplo',
    devto_id: 1234,
    readingTime: 2,
    contentPath: 'assets/content/articles/post-exemplo.md'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListRowComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PostListRowComponent);
    component = fixture.componentInstance;
  });

  it('deve renderizar os dados da linha editorial', () => {
    fixture.componentRef.setInput('article', mockArticle);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Titulo do Post Exemplo');
    expect(compiled.querySelector('p')?.textContent).toContain('Descricao concisa do post exemplo.');
    expect(compiled.textContent).toContain('#python');
    expect(compiled.textContent).toContain('#duckdb');
  });

  it('deve formatar a data curta', () => {
    fixture.componentRef.setInput('article', mockArticle);
    fixture.detectChanges();

    const formatted = component.formatShortDate('2026-11-04');
    expect(formatted).toBeTruthy();
    expect(formatted.toLowerCase()).toContain('nov');
  });
});
