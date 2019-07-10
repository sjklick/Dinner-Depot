import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

export class PageCountInfo {
	status: string;
	limit: number;
	pages: number;
	category: string;
}

@Injectable()
export class PageCountService {
	constructor(private http: HttpClient) {}

	getPageCount(category: string, limit: number) {
		//return this.http.get<PageCountInfo>('Distribution-Centre/api/products/page_count/get.php?category='+category+'?limit='+limit.toString(), httpOptions);
		return this.http.get<PageCountInfo>('Distribution-Centre/api/products/page_count/get.php?limit='+limit.toString(), httpOptions);
	}
}