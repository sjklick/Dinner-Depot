import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

const postBody = {
	page: 1,
	limit: 3,
	category: "all",
	quantity: true,
	description: true,
	image_url: true,
	price: true
};

export class Product {
	name: string;
	quantity: number;
	description: string;
	image_url: string;
	price: string;
};

export class Page {
	status: string;
	limit: number;
	page: number;
	category: string;
	products: Array<Product>;
};

@Injectable()
export class ProductListService {
	constructor(private http: HttpClient) {}

	getProducts() {
		return this.http.post<Page>('Distribution-Centre/api/products/page/get.php', postBody, httpOptions);
	}
}