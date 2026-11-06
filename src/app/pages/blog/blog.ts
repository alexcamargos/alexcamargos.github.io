import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BlogService } from '../../core/services/blog.service';
import { FeaturedSectionComponent } from './components/featured-section/featured-section';
import { PostListRowComponent } from './components/post-list-row/post-list-row';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FeaturedSectionComponent,
    PostListRowComponent
  ],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  readonly blogService = inject(BlogService);

  readonly articles = this.blogService.publishedArticles;
  readonly featuredArticles = this.blogService.featuredArticles;
  readonly isLoading = this.blogService.isLoading;
  readonly error = this.blogService.error;

  ngOnInit(): void {
    this.blogService.loadArticles().subscribe();
  }
}
