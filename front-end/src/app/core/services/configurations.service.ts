import { inject, Injectable, Renderer2, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class Configurations {
  #lang = signal<string>('en');
  #theme = signal<string>('light');
  _translateService = inject(TranslateService);
  _render = inject(Renderer2);
  _document = inject(Document);

  setLanguage(lang: string) {
    if (['en', 'ar'].includes(lang)) {
      localStorage.setItem('lang', lang);
      this.#lang.set(lang);
      this._translateService.use(lang);
    } else {
      localStorage.setItem('lang', 'en');
      this.#lang.set('en');
      this._translateService.use('en');
    }
  }

  setTheme(theme: string) {
    if (['light', 'dark'].includes(theme)) {
      const selectedTheme = theme === 'light' ? 'light-theme' : 'dark-theme';
      localStorage.setItem('theme', selectedTheme);
      this._document.body.className = '';
      this._render.addClass(this._document.body, selectedTheme);
    } else {
      localStorage.setItem('theme', 'light-theme');
      this._document.body.className = '';
      this._render.addClass(this._document.body, 'light-theme');
    }
  }
}
