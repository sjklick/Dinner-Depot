import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Categories {
	categories: string;
}

@Injectable()
export class CategoriesService {
	constructor(private http: HttpClient) {}
	getCategories() {
		return this.http.get<Categories>('localhost/Distribution-Centre/api/products/categories/get.php');
	}
}
