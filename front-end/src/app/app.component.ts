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
    if ('lang' in localStorage) {
      this._configurationsService.setLanguage(localStorage.getItem('lang')!);
    } else {
      this._configurationsService.setLanguage('en');
    }

    // Set Default App Theme
    document.body.className = '';
    if ('theme' in localStorage) {
      this._render.addClass(document.body, localStorage.getItem('theme')!);
    } else {
      const theme = this._configurationsService.theme('light');
      this._render.addClass(document.body, theme);
    }
  }
}
