import { Component, ChangeDetectionStrategy, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Article } from '../../../../core/models/article.model';
import { formatArticleDate } from '../../../../core/utils/date-formatter';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './featured-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedSectionComponent {
  readonly articles = input<Article[]>([]);
  readonly currentPage = signal<number>(0);
  readonly pageSize = 3;

  readonly visibleArticles = computed(() => {
    const list = this.articles();
    const start = this.currentPage() * this.pageSize;
    return list.slice(start, start + this.pageSize);
  });

  readonly counterText = computed(() => {
    const total = this.articles().length;
    if (total === 0) return '0 de 0';
    const start = this.currentPage() * this.pageSize + 1;
    const end = Math.min((this.currentPage() + 1) * this.pageSize, total);
    return `${start}–${end} de ${total}`;
  });

  readonly canPrev = computed(() => this.currentPage() > 0);
  readonly canNext = computed(() => (this.currentPage() + 1) * this.pageSize < this.articles().length);

  prev(): void {
    if (this.canPrev()) {
      this.currentPage.update((p) => p - 1);
    }
  }

  next(): void {
    if (this.canNext()) {
      this.currentPage.update((p) => p + 1);
    }
  }

  formatDate(dateStr: string): string {
    return formatArticleDate(dateStr);
  }
}
