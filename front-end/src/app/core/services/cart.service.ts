import { Injectable, signal } from '@angular/core';
import { Cart } from '../../views/authenticated/features/cart/models/cart.model';
import { Product } from '../../views/authenticated/features/cart/models/product.model';
import { Food } from '../../shared/models/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cart!: Cart;
  cartItems = signal<Product[]>([]);
  cartTotal = signal<number>(0);
  cartPrice = signal<number>(0);
  constructor() {
    this.#cart = new Cart();
    if ('cart' in localStorage) {
      const lsData = JSON.parse(localStorage.getItem('cart')!);
      this.#cart.items = [...lsData.items];
      this.#cart.totalCount = lsData.totalCount;
      this.#cart.totalPrice = lsData.totalPrice;
    }
    this.setValues();
  }

  addProduct(meal: Food) {
    this.#cart.addToCart(meal);
    this.setValues();
  }

  removeProduct(meal: Food) {
    this.#cart.removeProduct(meal);
    this.setValues();
  }

  changeQuantity(meal: Food, quantity: number) {
    this.#cart.changeQuantity(meal, quantity);
    this.setValues();
  }

  clearCart() {
    this.#cart.clearChart();
    this.setValues();
  }

  setValues() {
    this.cartItems.set(this.#cart.items);
    this.cartPrice.set(this.#cart.totalPrice);
    this.cartTotal.set(this.#cart.totalCount);
    this.storeInLS();
  }

  storeInLS() {
    localStorage.setItem('cart', JSON.stringify(this.#cart));
  }
}
