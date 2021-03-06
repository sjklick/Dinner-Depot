import { Injectable, EventEmitter } from '@angular/core';

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
  private itemCount: number = 0;
  private subTotal: number = 0.00;
  private taxes: number = 0.00;
  private total: number = 0.00;
  constructor() {}
  onCartChange: EventEmitter<boolean> = new EventEmitter();

  addItem(item: CartItem) {
    this.subTotal += item.price*item.quantity;
    this.itemCount += item.quantity;
    this.taxes = 0.13*this.subTotal;
    this.total = this.subTotal+this.taxes;
    for (let i=0; i<this.items.length; i++) {
      if (this.items[i].name == item.name) {
        this.items[i].quantity += item.quantity;
        this.onCartChange.emit(true);
        return;
      }
    }
    this.items.push(item);
    this.onCartChange.emit(true);
  }

  increaseQuantity(name: string) {
    for (let item of this.items) {
      if (item.name == name) {
        item.quantity++;
        this.subTotal += item.price;
        this.itemCount++;
        this.taxes = 0.13*this.subTotal;
        this.total = this.subTotal+this.taxes;
        this.onCartChange.emit(true);
        return;
      }
    }
  }

  decreaseQuantity(name: string) {
    for (let item of this.items) {
      if (item.name == name) {
        if (item.quantity > 1) item.quantity--;
        else this.items.splice(this.items.lastIndexOf(item), 1);
        this.subTotal -= item.price;
        this.itemCount--;
        this.taxes = 0.13*this.subTotal;
        this.total = this.subTotal+this.taxes;
        this.onCartChange.emit(true);
        return;
      }
    }
  }

  getItemCount() {
    return this.itemCount;
  }

  getItems() {
    return this.items;
  }

  getSubtotal() {
    return this.subTotal;
  }

  getTaxes() {
    return this.taxes;
  }

  getTotal() {
    return this.total;
  }

  clearCart() {
    this.subTotal = 0.00;
    this.itemCount = 0;
    this.taxes = 0.00;
    this.total = 0.00;
    this.onCartChange.emit(true);
    this.items.length = 0;
  }
}
