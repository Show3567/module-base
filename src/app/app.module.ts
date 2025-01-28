import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    WishlistComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
