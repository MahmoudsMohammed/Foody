import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-cart',
  imports: [CartTotalComponent, ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  _cartService = inject(CartService);
  cartItems = computed(() => this._cartService.cartItems());
  cartTotal = computed(() => this._cartService.cartPrice());
  cartCount = computed(() => this._cartService.cartTotal());
}
