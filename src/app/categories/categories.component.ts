import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { CategorySelectService } from '../category-select.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [ CategoriesService ],
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories:Array<string>;

  constructor(private catService: CategoriesService, private catSelectService: CategorySelectService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe((data: Array<string>) => this.categories = data);
  }

  onCategoryChange(value: string) {
    this.catSelectService.onCategoryChange.emit(value);
  }

}
