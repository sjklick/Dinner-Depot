import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorySelectService {
  constructor() { }
  onCategoryChange: EventEmitter<any> = new EventEmitter();
}
