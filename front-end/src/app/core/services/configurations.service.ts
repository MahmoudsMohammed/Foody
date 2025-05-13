import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class Configurations {
  #lang = signal<string>('en');
  #theme = signal<string>('light');
  _translateService = inject(TranslateService);
  changeLanguage(lang: string) {
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
}
