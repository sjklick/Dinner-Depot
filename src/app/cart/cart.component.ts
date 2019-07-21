import { Component, OnInit, Output, Input } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';
import { CartItemService } from '../cart-item.service';
import { CartItem } from '../cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Array<CartItem>;
  private subTotal: number;
  private taxes: number;
  private total: number;

  constructor(private toggle: ToggleCartService, private itemServ: CartItemService) {}

  ngOnInit() {
    this.items = this.itemServ.getItems();
    this.cartChange();
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

}
