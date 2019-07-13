import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LimitSelectService {
  constructor() {}
  onLimitChange: EventEmitter<number> = new EventEmitter();
}
