import { Component, OnInit } from '@angular/core';
import { Categories, CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [ CategoriesService ],
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories: Categories;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  showCategories() {
    this.categoriesService.getCategories().subscribe((data: Categories) => this.categories = {...data});
  }

}
