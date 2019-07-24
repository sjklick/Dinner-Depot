import { Component, OnInit, Output, Input } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';
import { CartItemService } from '../cart-item.service';
import { CartItem } from '../cart-item.service';

enum State {
  Preview,
  Checkout,
  Processing
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
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

  constructor(private toggle: ToggleCartService, private itemServ: CartItemService) {
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

  onPlaceOrder() {
    this.state = State.Processing;
  }
}