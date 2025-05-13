import { Component, computed, inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Configurations } from '../../services/configurations.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  _render = inject(Renderer2);
  _configurations = inject(Configurations);
  appLang = computed(() => this._configurations.appLang);
  appTheme = computed(() => this._configurations.appTheme);

  displayMenu(el: HTMLElement) {
    // this._render.setStyle(el, 'display', 'block');
    this._render.addClass(el, 'animate__backInRight');
  }
}
