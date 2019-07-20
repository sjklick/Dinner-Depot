import { Injectable } from '@angular/core';

export class CartItem {
  name: string;
  quantity: number;
  price: number;
};

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private items: Array<CartItem> = new Array<CartItem>();
  constructor() {}

  addItem(item: CartItem) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
