import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMenu]',
})
export class MenuDirective {
  _eleRef = inject(ElementRef);
  _render = inject(Renderer2);
  parent = (this._eleRef.nativeElement as HTMLElement).parentElement;
  menuToggle = false;
  @HostListener('document:click', ['$event']) onClick(e: Event) {
    const ele = e.target as HTMLElement;
    if (
      (ele === this.parent ||
        this.parent === ele.parentElement ||
        this._eleRef.nativeElement.contains(ele)) &&
      !this.menuToggle
    ) {
      this._render.setStyle(this._eleRef.nativeElement, 'display', 'block');
      this.menuToggle = true;
    } else {
      this._render.setStyle(this._eleRef.nativeElement, 'display', 'none');
      this.menuToggle = false;
    }
  }
}
