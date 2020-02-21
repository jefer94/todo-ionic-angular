import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'choco-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {

  constructor(
    private lang: LangService,
    private alert: AlertService
  ) { }

  ngOnInit() {}

  items = []

  autoIncrementToDoId = 0;
  listEvent = true;
  input = '';
  path = '';

  addFromCache(id, label) {
    this.items = [].concat(this.items, this.addToDoItem(id, label));
    console.log(this.items);
    this.listEvent = true;
    this.alert.show(this.lang.createMessage, 'success');
  }

  removeFromCache(id) {
    this.items = this.items.filter(v => v.id !== id);
    this.listEvent = true;
    this.alert.show(this.lang.removeMessage, 'danger');
  }
  
  incrementToDoId() {
    return ++this.autoIncrementToDoId;
  }

  addToDoItem(id, label) {
    return {id, label}
  }

  change(v) {
    this.input = v.target.value
  }

  add() {
    this.addFromCache(this.incrementToDoId(), this.input)
  }

  remove(id) {
    () => this.removeFromCache(id)
  }
}
