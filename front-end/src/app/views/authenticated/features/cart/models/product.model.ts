import { Food } from '../../../../../shared/models/meal';

export class Product {
  price: number;
  product: Food;
  quantity: number;
  constructor(product: Food) {
    this.product = product;
    this.price = product.price;
    this.quantity = 1;
  }
}
