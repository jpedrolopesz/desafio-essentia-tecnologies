import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private api = 'http://localhost:3001/api/todos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<{ data: Todo[] }>(this.api).pipe(map((r) => r.data));
  }

  create(title: string, description: string): Observable<Todo> {
    return this.http
      .post<{ data: Todo }>(this.api, { title, description })
      .pipe(map((r) => r.data));
  }

  update(id: number, data: Partial<Todo>): Observable<Todo> {
    return this.http.put<{ data: Todo }>(`${this.api}/${id}`, data).pipe(map((r) => r.data));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
