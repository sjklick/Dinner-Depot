import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
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
	public postBody = {
		page: 1,
		limit: 5,
		category: "all",
		quantity: true,
		description: true,
		image_url: true,
		price: true
	};

	constructor(private http: HttpClient) {}

	getProducts() {
		return this.http.post<Page>('Distribution-Centre/api/products/page/get.php', this.postBody, httpOptions);
	}
}