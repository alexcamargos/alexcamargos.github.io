import { Component, OnInit, inject, input, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownComponent } from 'ngx-markdown';
import { BlogService } from '../../../core/services/blog.service';
import { Article } from '../../../core/models/article.model';
import { formatArticleDate } from '../../../core/utils/date-formatter';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, MarkdownComponent],
  templateUrl: './post-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  readonly slug = input<string>('');

  readonly article = signal<Article | null>(null);
  readonly rawMarkdown = signal<string>('');
  readonly isLoading = signal<boolean>(true);
  readonly notFound = signal<boolean>(false);

  readonly cleanMarkdown = computed(() => {
    const raw = this.rawMarkdown();
    return raw.replace(/^---[\s\S]*?---\s*/, '');
  });

  ngOnInit(): void {
    const currentSlug = this.slug();
    if (!currentSlug) {
      this.notFound.set(true);
      this.isLoading.set(false);
      return;
    }

    this.loadPost(currentSlug);
  }

  loadPost(slug: string): void {
    this.isLoading.set(true);
    this.notFound.set(false);

    this.blogService.loadArticles().subscribe({
      next: (articles) => {
        const found = articles.find((a) => a.slug === slug);
        if (!found) {
          this.notFound.set(true);
          this.isLoading.set(false);
          return;
        }

        this.article.set(found);

        this.blogService.getArticleContent(slug).subscribe({
          next: (content) => {
            this.rawMarkdown.set(content);
            this.isLoading.set(false);
          },
          error: () => {
            this.notFound.set(true);
            this.isLoading.set(false);
          }
        });
      },
      error: () => {
        this.notFound.set(true);
        this.isLoading.set(false);
      }
    });
  }

  formatDate(dateStr?: string): string {
    return dateStr ? formatArticleDate(dateStr) : '';
  }
}
