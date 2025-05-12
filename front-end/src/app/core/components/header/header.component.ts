import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  _render = inject(Renderer2);
  displayMenu(el: HTMLElement) {
    // this._render.setStyle(el, 'display', 'block');
    this._render.addClass(el, 'animate__backInRight');
  }
}
