import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

export class Item {
	name: string;
	quantity: number;
}

export class Order {
	customer: string;
	email: string;
	confirmReceived: boolean;
	confirmShipped: boolean;
	items: Array<Item>;
}

export class OrderResponse {
	success: boolean;
	error: string;
	orderId: number;
}

@Injectable()
export class CartOrderService {
	constructor (private http: HttpClient) {}

	placeOrder(order: Order) {
		return this.http.post<OrderResponse>('Distribution-Centre/api/orders/place.php', order, httpOptions);
	}
}