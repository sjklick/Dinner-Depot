import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleCartService {
  constructor() {}
  onToggleCart: EventEmitter<boolean> = new EventEmitter();
}
