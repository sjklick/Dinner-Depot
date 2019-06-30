import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [ CategoriesService ],
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories:Array<string>;

  constructor(private catService: CategoriesService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe((data: Array<string>) => this.categories = data);
  }

  showCategories() {
    this.catService.getCategories().subscribe((data: Array<string>) => this.categories = data);
  }

}
