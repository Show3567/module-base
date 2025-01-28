import { Component, OnInit } from '@angular/core';
import { Todo } from '../../services/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    // this.todos = new TodoService().todos;
  }

  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  deletetodo(num: number) {
    console.log('hello', num);
  }
}

// class AA {

//   // service!: TodoService;

//   constructor(private service: TodoService) {
//     // this.service = service;
//   }
// }
