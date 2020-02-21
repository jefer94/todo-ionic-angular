import { Injectable } from '@angular/core';


import en from '../lang/en';
import es from '../lang/es';

interface Dictionary {
  [Key: string]: string;
} 

@Injectable({
  providedIn: 'root'
})
export class LangService implements Dictionary {
  [Key: string]: string;
  
  constructor() {
    var locale = window.navigator.language;
    const code = locale.substr(0,2);

    const lang =  (
      code == 'es' ?
        es :
        en
    );

    for (const i in lang)
      this[i] = lang[i];
  }
}
