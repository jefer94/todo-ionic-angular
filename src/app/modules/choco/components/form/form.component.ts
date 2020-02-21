import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LangService } from '../../services/lang.service';

export type FormType = 'input' | 'datetime' | 'select' | 'checkbox'

export type FormOptions = {
  name: string,
  value: string
}

export type FormField = {
  label?: string,
  name: string,
  placeholder?: string,
  type: FormType,
  value?: string,
  options?: FormOptions[],
  disabled?: boolean
}

export type FormPosition = 'fixed' | 'stacked' | 'floating';

export type FormModel = {
  fields: FormField[],
  color: string,
  position: FormPosition
}

@Component({
  selector: 'choco-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  constructor(public lang: LangService) {}

  ngOnInit() {
    for (let field of this.model.fields) {
      this.store[field.name] = field.value
    }
  }

  @Input()
  model: FormModel

  @Input()
  store: Dictionary = {};

  @Output()
  storeChange: EventEmitter<Dictionary> = new EventEmitter<Dictionary>();
}
