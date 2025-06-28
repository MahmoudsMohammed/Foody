import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Configurations } from './core/services/configurations.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  _router = inject(Router);
  _ref = inject(DestroyRef);

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

    // Scroll to Top After Navigation End
    this._router.events
      .pipe(takeUntilDestroyed(this._ref))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      });
  }
}
