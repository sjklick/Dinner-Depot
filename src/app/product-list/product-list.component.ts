import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Page } from './product-list.service';
import { CategorySelectService } from '../category-select.service';
import { PageSelectService } from '../page-select.service';
import { LimitSelectService } from '../limit-select.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListService ],
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  private response: Page;

  constructor(private prodService: ProductListService, private catSelect: CategorySelectService, private pageSelect: PageSelectService, private limitService: LimitSelectService) {}

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.pageSelect.onPageChange.subscribe((page: number) => {this.updatePage(page)});
    this.limitService.onLimitChange.subscribe((limit: number) => {this.updateLimit(limit)});
    this.prodService.getProducts().subscribe((data: Page) => this.response = data);
  }

  updateCategory(value: string) {
    this.prodService.postBody.category = value;
    this.prodService.postBody.page = 1;
		this.prodService.getProducts().subscribe((data: Page) => this.response = data);
  }
  
  updatePage(page: number) {
    if (this.prodService.postBody.page != page) {
      this.prodService.postBody.page = page;
      this.prodService.getProducts().subscribe((data: Page) => this.response = data);
    }
  }

  updateLimit(limit: number) {
    if (this.prodService.postBody.limit != limit) {
      this.prodService.postBody.limit = limit;
      this.prodService.postBody.page = 1;
      this.prodService.getProducts().subscribe((data: Page) => this.response = data);
    }
  }
}
