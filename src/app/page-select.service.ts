import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageSelectService {
  constructor() {}
  onPageChange: EventEmitter<number> = new EventEmitter();
}
