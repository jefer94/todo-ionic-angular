import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { AlertService } from '../../services/alert.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'choco-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {

  constructor(
    private lang: LangService,
    private alert: AlertService,
    private todo: TodoService
  ) { }

  ngOnInit() {}

  items = [];

  autoIncrementToDoId = 0;
  input = '';
  path = '';

  remove(id) {
    this.todo.remove(id);
    this.alert.show(this.lang.removeMessage, 'danger');
  }

  change(v) {
    this.input = v.target.value;
  }

  add() {
    this.todo.add(this.input);
    this.input = '';
    this.alert.show(this.lang.createMessage, 'success');
  }
}
