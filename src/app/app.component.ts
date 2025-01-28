import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hello frontend';
  isdisabled = false;
  inputval = '';

  taggleDisabl() {
    this.isdisabled = !this.isdisabled;
  }
}
