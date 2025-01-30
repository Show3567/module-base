import { Component } from '@angular/core';
import { Todo } from '../../services/todo.interface';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: false,

  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  todos: Todo[] = [];
  sbp = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sbp.add(
      this.todoService.todos$.subscribe((data) => {
        this.todos = data;
      })
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sbp.unsubscribe();
  }
}
