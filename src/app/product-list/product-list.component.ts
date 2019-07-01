import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ ProductListService ],
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  response:Array<any>;

  constructor(private prodService: ProductListService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe((data: Array<any>) => this.response = data);
  }

}
