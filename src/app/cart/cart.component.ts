import { Component, OnInit, Output, Input } from '@angular/core';
import { ToggleCartService } from '../toggle-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private toggle: ToggleCartService) {}

  ngOnInit() {}

  onHideClick() {
    this.toggle.onToggleCart.emit(false);
  }

}
