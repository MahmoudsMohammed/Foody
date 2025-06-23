import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../../../../core/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  _cartService = inject(CartService);
  items = input.required<Product[]>();
  count = signal<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 10]);

  onRemoveProduct(item: Product) {
    this._cartService.removeProduct(item.product);
  }

  onChangeQuantity(item: Product, e: Event) {
    const newValue = (e.target as HTMLSelectElement).value;
    this._cartService.changeQuantity(item.product, +newValue);
  }
}
