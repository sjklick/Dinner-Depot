import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Page } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListService ],
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  response: Page;

  constructor(private prodService: ProductListService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe((data: Page) => this.response = data);
  }

}
