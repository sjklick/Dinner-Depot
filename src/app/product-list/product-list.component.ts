import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Page } from './product-list.service';
import { Product } from './product-list.service';
import { CategorySelectService } from '../category-select.service';
import { PageSelectService } from '../page-select.service';
import { LimitSelectService } from '../limit-select.service';
import { CartItemService, CartItem } from '../cart-item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListService ],
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  private response: Page;

  constructor(private prodService: ProductListService, private catSelect: CategorySelectService, private pageSelect: PageSelectService, private limitService: LimitSelectService, private itemServ: CartItemService) {}

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.pageSelect.onPageChange.subscribe((page: number) => {this.updatePage(page)});
    this.limitService.onLimitChange.subscribe((limit: number) => {this.updateLimit(limit)});
    this.pageSelect.onPageChange.emit(1);
  }

  updateCategory(value: string) {
    this.prodService.postBody.category = value;
    this.pageSelect.onPageChange.emit(1);
  }
  
  updatePage(page: number) {
    this.prodService.postBody.page = page;
    this.prodService.getProducts().subscribe((data: Page) => this.response = data);
  }

  updateLimit(limit: number) {
    if (this.prodService.postBody.limit != limit) {
      this.prodService.postBody.limit = limit;
      this.pageSelect.onPageChange.emit(1);
    }
  }

  addItem(product: Product) {
    let cartItem: CartItem = new CartItem;
    cartItem.name = product.name;
    cartItem.price = parseFloat(product.price);
    cartItem.quantity = 1;
    this.itemServ.addItem(cartItem);
  }
}
