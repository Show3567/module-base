import { Injectable } from '@angular/core';
import { Todo, Comment } from './todo.interface';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  retry,
  Subject,
  tap,
} from 'rxjs';

@Injectable()
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  todosPath = 'todos';
  commentPath = 'comments';

  todos$ = new BehaviorSubject<Todo[]>([]);

  // lifecycle
  constructor(private http: HttpClient) {}

  // methods
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/${this.todosPath}`);
  }
  getComments(): Observable<Todo[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${this.commentPath}`).pipe(
      map((comments: Comment[]) => {
        return comments.map((comment: Comment) => {
          return {
            userId: comment.postId,
            id: comment.id,
            title: comment.body,
            completed: false,
          } as Todo;
        });
      }),
      tap((todos) => {
        this.todos$.next(todos);
      }),
      retry(3),
      catchError((err) => of(err))
    );
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.baseUrl}/${this.todosPath}`, todo).pipe(
      tap((todo: Todo) => {
        this.todos$.next([todo, ...this.todos$.value]);
      })
    );
  }
}
