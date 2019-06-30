import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

@Injectable()
export class CategoriesService {
	constructor(private http: HttpClient) {}

	getCategories() {
		return this.http.get<Array<string>>('Distribution-Centre/api/products/categories/get.php', httpOptions);
	}
}
