import { Component, OnInit } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  private seeCart: boolean;
  private itemCount: number = 0;

  constructor(private toggle: ToggleCartService, private cartItemServ: CartItemService) {}

  ngOnInit() {
    this.seeCart = false;
    this.toggle.onToggleCart.subscribe((value: boolean) => this.seeCart = value);
    this.cartItemServ.onCartChange.subscribe((value: boolean) => {this.onCartChange()});
  }

  onIconClick() {
    this.seeCart = !this.seeCart;
  }

  onCartChange() {
    this.itemCount = this.cartItemServ.getItemCount();
  }

}
