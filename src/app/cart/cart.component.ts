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

  constructor(private toggle: ToggleCartService, private itemServ: CartItemService) {}

  ngOnInit() {
    this.items = new Array<CartItem>();
    console.log('cart-component init');
    this.items = this.itemServ.getItems();
    console.log(this.items.length);
    //this.itemServ.onCartItemChange.subscribe((items: Array<CartItem>) => {this.items = items});
    console.log(this.items.length);
    //this.itemServ.getItems().subscribe((items: Array<CartItem>) => {this.items = items});
  }

  onHideClick() {
    this.toggle.onToggleCart.emit(false);
  }

}
