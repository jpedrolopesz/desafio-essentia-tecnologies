import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from './todo.service';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardBadgeComponent } from '@/shared/components/badge';
import { ZardCardComponent } from '@/shared/components/card';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ZardButtonComponent, ZardBadgeComponent, ZardCardComponent],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  title = '';
  description = '';
  editingTodo: Todo | null = null;
  editTitle = '';
  editDescription = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.load();
  }
  load() {
    this.todoService.getAll().subscribe((todos) => (this.todos = todos));
  }

  create() {
    if (!this.title.trim()) return;
    this.todoService.create(this.title, this.description).subscribe(() => {
      this.title = '';
      this.description = '';
      this.load();
    });
  }

  startEdit(todo: Todo) {
    this.editingTodo = todo;
    this.editTitle = todo.title;
    this.editDescription = todo.description ?? '';
  }

  saveEdit() {
    if (!this.editTitle || !this.editingTodo) return;
    this.todoService
      .update(this.editingTodo.id, {
        title: this.editTitle,
        description: this.editDescription,
      })
      .subscribe(() => {
        this.editingTodo = null;
        this.load();
      });
  }

  toggleComplete(todo: Todo) {
    this.todoService.update(todo.id, { completed: !todo.completed }).subscribe(() => this.load());
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() => this.load());
  }
}
