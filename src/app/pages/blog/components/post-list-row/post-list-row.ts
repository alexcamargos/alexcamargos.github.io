import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../../../core/models/article.model';
import { formatShortArticleDate } from '../../../../core/utils/date-formatter';

@Component({
  selector: 'app-post-list-row',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list-row.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListRowComponent {
  readonly article = input.required<Article>();

  formatShortDate(dateStr: string): string {
    return formatShortArticleDate(dateStr);
  }
}
