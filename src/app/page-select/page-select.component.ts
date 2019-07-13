import { Component, OnInit } from '@angular/core';
import { CategorySelectService } from '../category-select.service';
import { PageCountService, PageCountInfo } from './page-count.service';
import { PageSelectService } from '../page-select.service';
import { LimitSelectService } from '../limit-select.service';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  providers: [ PageCountService ],
  styleUrls: ['./page-select.component.scss']
})
export class PageSelectComponent implements OnInit {
  private pageInfo: PageCountInfo;
  private page: number;

  constructor(private countService: PageCountService, private catSelect: CategorySelectService, private pageSelect: PageSelectService, private limitService: LimitSelectService) {
    this.countService.postBody.limit = 5;
    this.countService.postBody.category = 'all';
  }

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
    this.pageSelect.onPageChange.subscribe((page: number) => {this.updatePage(page)});
  }

  onItemsClick(value: string) {
    this.countService.postBody.limit = parseInt(value);
    this.limitService.onLimitChange.emit(parseInt(value));
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }

  onPageClick(value: string) {
    this.pageSelect.onPageChange.emit(parseInt(value));
  }
  
  updatePage(page: number) {
    this.page = page;
  }

  updateCategory(value: string) {
    this.countService.postBody.category = value;
    this.countService.getPageCount().subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }
  
  onPrevious() {
    this.pageSelect.onPageChange.emit(this.page-1);
  }

  onNext() {
    this.pageSelect.onPageChange.emit(this.page+1);
  }
}
