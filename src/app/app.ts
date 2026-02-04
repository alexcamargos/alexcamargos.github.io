import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-v1');
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
