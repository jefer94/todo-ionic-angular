import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public items = []
  keyId = '__TO_DO_LAST_ID__';
  keyItems = '__TO_DO_ITEMS__';
  

  autoIncrementId = 0;

  constructor() {
    this.autoIncrementId = JSON.parse(localStorage.getItem(this.keyId) || '0');
    this.items = JSON.parse(localStorage.getItem(this.keyItems) || '[]');
  }

  public format(id, label) {
    return {id, label}
  }

  public add(label) {
    const id = this.incrementId();
    this.items = [].concat(this.items, this.format(id, label));
    localStorage.setItem(this.keyItems, JSON.stringify(this.items))
  }

  public remove(id) {
    this.items = this.items.filter(v => v.id !== id);
    localStorage.setItem(this.keyItems, JSON.stringify(this.items));
  }
  
  public incrementId() {
    localStorage.setItem(this.keyId, (++this.autoIncrementId).toString())
    return ++this.autoIncrementId;
  }
}
