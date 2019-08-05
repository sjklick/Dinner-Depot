import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';
import { CartItemService } from '../cart-item.service';
import { CartItem } from '../cart-item.service';
import { CartOrderService, Order, Item, OrderResponse } from './cart.order.service';

enum State {
  Preview,
  Checkout,
  Processing,
  Result
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [ CartOrderService ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  State = State;
  private state: State;
  private items: Array<CartItem>;
  private subTotal: number;
  private taxes: number;
  private total: number;
  private sendReceived: boolean;
  private sendShipped: boolean;
  private customerName: string;
  private customerEmail: string;
  @ViewChild('nameField', {static: false}) nameField: ElementRef;
  @ViewChild('emailField', {static: false}) emailField: ElementRef;
  private orderResponse: OrderResponse;

  constructor(private toggle: ToggleCartService, private itemServ: CartItemService, private orderServ: CartOrderService) {
    this.state = State.Preview;
    this.sendReceived = false;
    this.sendShipped = false;
  }

  ngOnInit() {
    this.items = this.itemServ.getItems();
    this.cartChange(true);
    this.itemServ.onCartChange.subscribe((val: boolean) => {this.cartChange(val)});
  }

  onHideClick() {
    this.toggle.onToggleCart.emit(false);
  }

  cartChange(val: boolean) {
    this.subTotal = this.itemServ.getSubtotal();
    this.taxes = this.itemServ.getTaxes();
    this.total = this.itemServ.getTotal();
  }

  onOpenCheckout() {
    this.state = State.Checkout;
  }

  onConfirmReceiveClick(checked: boolean) {
    this.sendReceived = checked;
  }

  onConfirmShipClick(checked: boolean) {
    this.sendShipped = checked;
  }

  onOrderResponse(response: OrderResponse) {
    this.orderResponse = response;
    this.state = State.Result;
  }

  onPlaceOrder() {
    let order = new Order;
    this.state = State.Processing;
    order.confirmReceived = this.sendReceived;
    order.confirmShipped = this.sendShipped;
    this.customerName = this.nameField.nativeElement.value;
    this.customerEmail = this.emailField.nativeElement.value;
    order.customer = this.customerName;
    order.email = this.customerEmail;
    order.items = new Array<Item>();
    for (let item of this.items) {
      let next = new Item;
      next.name = item.name;
      next.quantity = item.quantity;
      order.items.push(next);
    }
    this.orderServ.placeOrder(order).subscribe((response: OrderResponse) => {this.onOrderResponse(response)});
  }

  onEndSession() {
    this.itemServ.clearCart();
    this.onHideClick();
    this.state = State.Preview;
  }

  onCartMinus(value: string) {
    this.itemServ.decreaseQuantity(value);
    this.cartChange(true);
  }

  onCartPlus(value: string) {
    this.itemServ.increaseQuantity(value);
    this.cartChange(true);
  }
}