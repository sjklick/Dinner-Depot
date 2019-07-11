import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

export class PageCountInfo {
	status: boolean;
	error: string;
	limit: number;
	pages: number;
	category: string;
}

@Injectable()
export class PageCountService {
	public postBody = {
		limit: 5,
		category: "all",
	};

	constructor(private http: HttpClient) {}

	getPageCount() {
		return this.http.post<PageCountInfo>('Distribution-Centre/api/products/page_count/get.php', this.postBody, httpOptions);
	}
}