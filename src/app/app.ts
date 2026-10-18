import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('alcamargos-portfolio');
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  constructor() {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang');
    const initialLang = savedLang === 'pt' || savedLang === 'en' ? savedLang : 'en';
    this.translate.use(initialLang);
    this.document.documentElement.lang = initialLang;

    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        this.document.documentElement.lang = event.lang;
        localStorage.setItem('lang', event.lang);
      });
  }
}
