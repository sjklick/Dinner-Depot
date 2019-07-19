import { Component, OnInit } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  private seeCart: boolean;

  constructor(private toggle: ToggleCartService) {}

  ngOnInit() {
    this.seeCart = false;
    this.toggle.onToggleCart.subscribe((value: boolean) => this.seeCart = value);
  }

  onIconClick() {
    this.seeCart = !this.seeCart;
  }

}
