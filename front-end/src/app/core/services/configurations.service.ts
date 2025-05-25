import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class Configurations {
  #lang = signal<string>('en');
  #theme = signal<string>('light');
  appLang = this.#lang.asReadonly();
  appTheme = this.#theme.asReadonly();
  _translateService = inject(TranslateService);

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

  theme(theme: string) {
    let selectedTheme = '';
    if (['light', 'dark'].includes(theme)) {
      selectedTheme = theme === 'light' ? 'light-theme' : 'dark-theme';
      localStorage.setItem('theme', theme);
    } else {
      theme = 'light';
      selectedTheme = 'light-theme';
      localStorage.setItem('theme', 'light');
    }
    this.#theme.set(theme);
    return selectedTheme;
  }
}
