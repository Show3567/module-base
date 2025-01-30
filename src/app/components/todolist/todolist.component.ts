import { Component, OnInit } from '@angular/core';
import { Todo } from '../../services/todo.interface';
import { TodoService } from '../../services/todo.service';
import { interval, map, Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];
  sbp = new Subscription();

  inputTitle = '';
  // inputTodo = new FormControl('', [Validators.required, Validators.email], []);

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.sbp.add(
      this.todoService.todos$.subscribe((data) => {
        this.todos = data;
      })
    );
    this.sbp.add(this.todoService.getComments().subscribe());
    // this.sbp.add(this.inputTodo.valueChanges.subscribe((v) => console.log(v)));
    // this.sbp.add(
    //   interval(1000)
    //     .pipe(
    //       map((num) => {
    //         return 'hello world ' + num;
    //       })
    //     )
    //     .subscribe((data) => console.log(data))
    // );
  } // observable vs. promise

  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  deletetodo(num: number) {
    console.log('hello', num);
  }

  handleKeyup(ev: any) {
    this.todoService
      .addTodo({
        id: 203,
        title: this.inputTitle,
        userId: 4,
        completed: false,
      })
      .subscribe();
  }
}
