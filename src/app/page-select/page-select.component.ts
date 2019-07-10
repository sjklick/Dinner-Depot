import { Component, OnInit } from '@angular/core';
import { CategorySelectService } from '../category-select.service';
import { PageCountService, PageCountInfo } from './page-count.service';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  providers: [ PageCountService ],
  styleUrls: ['./page-select.component.scss']
})
export class PageSelectComponent implements OnInit {
  private pageInfo: PageCountInfo;

  constructor(private countService: PageCountService, private catSelect: CategorySelectService) {
    this.pageInfo = new PageCountInfo();
    this.pageInfo.category = 'all';
    this.pageInfo.limit = 5;
  }

  ngOnInit() {
    this.catSelect.onCategoryChange.subscribe((value: string) => {this.updateCategory(value)});
    this.countService.getPageCount(this.pageInfo.category, this.pageInfo.limit).subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }

  onItemsClick(value: number) {
    this.pageInfo.limit = value;
    this.countService.getPageCount(this.pageInfo.category, this.pageInfo.limit).subscribe((info: PageCountInfo) => {this.pageInfo = info});
  }

  updateCategory(value: string) {
    this.pageInfo.category = value;
    this.countService.getPageCount(this.pageInfo.category, this.pageInfo.limit).subscribe((info: PageCountInfo) => {this.pageInfo = info});
	}
}
