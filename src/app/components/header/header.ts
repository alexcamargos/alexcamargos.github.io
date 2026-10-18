import { Component, inject, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  translate = inject(TranslateService);
  isMobileMenuOpen = signal(false);
  currentLang = signal(this.translate.currentLang || this.translate.defaultLang || 'en');

  constructor() {
    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        this.currentLang.set(event.lang);
      });
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleTheme(): void {
    this.themeService.updateDarkMode();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  changeLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }
}
