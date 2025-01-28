import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../services/todo.interface';

@Component({
  selector: 'app-todo-item',
  standalone: false,

  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() todoref = new EventEmitter();

  deletetodo() {
    this.todoref.emit(this.todo.id);
  }
}
