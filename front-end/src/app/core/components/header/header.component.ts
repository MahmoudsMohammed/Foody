import { Component, computed, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Configurations } from '../../services/configurations.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  _render = inject(Renderer2);
  _configurations = inject(Configurations);
  appLang = computed(() => this._configurations.appLang());
  appTheme = computed(() => this._configurations.appTheme());

  ngOnInit(): void {
    console.log(this._configurations.appLang());
  }

  displayMenu(el: HTMLElement) {
    // this._render.setStyle(el, 'display', 'block');
    this._render.addClass(el, 'animate__backInRight');
  }

  onChangeTheme() {
    const theme = this.appTheme() === 'light' ? 'dark' : 'light';
    const selectedTheme = this._configurations.theme(theme);
    document.body.className = '';
    this._render.addClass(document.body, selectedTheme);
  }
}
