import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.BlogComponent)
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/post-detail/post-detail').then((m) => m.PostDetailComponent)
  },
  { path: '**', redirectTo: '' }
];
