import { Component, OnInit } from '@angular/core';
import { CategorySelectService } from '../category-select.service';
import { PageCountService, PageCountInfo } from './page-count.service';
import { PageSelectService } from '../page-select.service';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  providers: [ PageCountService ],
  styleUrls: ['./page-select.component.scss']
})
export class PageSelectComponent implements OnInit {
  private pageInfo: PageCountInfo;

  constructor(private countService: PageCountService, private catSelect: CategorySelectService, private pageSelect: PageSelectService) {
    this.countService.postBody.limit = 5;
    this.countService.postBody.category = 'all';
  }

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }

  onItemsClick(value: number) {
    this.countService.postBody.limit = value;
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }

  onPageClick(value: string) {
    this.pageSelect.onPageChange.emit(parseInt(value));
  }
  
  updateCategory(value: string) {
    this.countService.postBody.category = value;
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
	}
}
