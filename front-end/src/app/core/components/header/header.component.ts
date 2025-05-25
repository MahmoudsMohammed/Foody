import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Configurations } from '../../services/configurations.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  _render = inject(Renderer2);
  _configurations = inject(Configurations);
  appLang = computed(() => this._configurations.appLang());
  appTheme = computed(() => this._configurations.appTheme());

  ngOnInit(): void {}

  displayMenu(el: HTMLElement) {
    // this._render.setStyle(el, 'display', 'block');
    this._render.addClass(el, 'animate__backInRight');
  }

  onChangeTheme() {
    const theme = this.appTheme() === 'light' ? 'dark' : 'light';
    this._render.removeClass(
      document.body,
      this.appTheme() === 'light' ? 'light-theme' : 'dark-theme'
    );
    const selectedTheme = this._configurations.theme(theme);
    this._render.addClass(document.body, selectedTheme);
  }

  onChangeLanguage(lang: string) {
    if (lang === 'ar') {
      this._render.addClass(document.body, 'rtl');
    } else {
      this._render.removeClass(document.body, 'rtl');
    }
    this._configurations.setLanguage(lang);
  }
}
