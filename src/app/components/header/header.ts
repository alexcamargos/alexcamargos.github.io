import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../../core/services/theme';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  translate = inject(TranslateService);

  toggleTheme() {
    this.themeService.updateDarkMode();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
