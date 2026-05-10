import { Component, signal } from '@angular/core';
import { TodoComponent } from './features/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.html',
})
export class AppComponent {
  protected readonly title = signal('todo-frontend');
}
