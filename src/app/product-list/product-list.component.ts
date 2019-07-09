import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Page } from './product-list.service';
import { CategorySelectService } from '../category-select.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListService ],
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  private response: Page;

  constructor(private prodService: ProductListService, private catSelect: CategorySelectService) {}

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.prodService.getProducts().subscribe((data: Page) => this.response = data);
  }

  updateCategory(value: string) {
		this.prodService.postBody.category = value;
		this.prodService.getProducts().subscribe((data: Page) => this.response = data);
	}
}
