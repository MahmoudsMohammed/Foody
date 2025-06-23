import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  imports: [CurrencyPipe],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTotalComponent {
  totalCount = input.required<number>();
  totalPrice = input.required<number>();
}
