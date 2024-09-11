import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private count = 0;

  getCount() {
    return this.count;
  }

  increment() {
    this.count++;
  }
}
