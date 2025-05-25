import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Configurations } from './core/services/configurations.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'front-end';
  _configurationsService = inject(Configurations);
  _render = inject(Renderer2);

  ngOnInit(): void {
    // Set Default App Language
    this._configurationsService.setLanguage(
      localStorage.getItem('lang') ?? 'en'
    );
    if (this._configurationsService.appLang() === 'ar') {
      this._render.addClass(document.body, 'rtl');
    } else {
      this._render.removeClass(document.body, 'rtl');
    }
    // Set Default App Theme
    const theme = this._configurationsService.theme(
      localStorage.getItem('theme') ?? 'light'
    );
    this._render.addClass(document.body, theme);
  }
}
