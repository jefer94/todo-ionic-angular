import { Injectable } from '@angular/core';

interface ContextServiceProps {
  [Key: string]: any;
}

const store: ContextServiceProps = {}

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  public getStore() {
    return store;
  }

  constructor() {}

  setCustom<T>(key: string, data: T) {
    store[key] = data;
  }

  getCustom(key: string) {
    return store[key];
  }
}
