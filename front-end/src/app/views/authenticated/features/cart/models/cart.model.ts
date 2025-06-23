import { Food } from '../../../../../shared/models/meal';
import { Product } from './product.model';

export class Cart {
  items: Product[];
  totalPrice: number;
  totalCount: number;
  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.totalCount = 0;
  }

  addToCart(meal: Food) {
    let oldMeal = this.items.find((m) => m.product.id === meal.id);
    if (!oldMeal) {
      const product = new Product(meal);
      this.items = [...this.items, product];
      this.totalPrice += meal.price;
      this.totalCount++;
    } else {
      oldMeal.quantity += 1;
      oldMeal.price = oldMeal.quantity * oldMeal.product.price;
      this.totalPrice += meal.price;
      this.totalCount++;
    }
  }

  removeProduct(meal: Food) {
    const productIndex = this.items.findIndex((m) => m.product.id === meal.id);
    this.totalCount -= this.items[productIndex].quantity;
    this.totalPrice -= this.items[productIndex].price;
    this.items.splice(productIndex, 1);
  }

  changeQuantity(meal: Food, quantity: number) {
    quantity = quantity - 1;
    const product = this.items.find((m) => m.product.id === meal.id);
    product!.quantity = quantity;
    product!.price = quantity * product!.product.price;
    this.totalCount += product?.quantity!;
    this.totalPrice += product?.price!;
  }

  clearChart() {
    this.items = [];
    this.totalCount = 0;
    this.totalPrice = 0;
  }
}
