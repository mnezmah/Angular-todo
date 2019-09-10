import { Todo } from '../models/Todo';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string =  'http://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
   return  this.http.get<Todo[]>(this.todosUrl)
  }

}
