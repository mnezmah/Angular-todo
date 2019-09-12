import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => { this.todos = todos })
  }

  deleteTodo(todo: Todo) {
    //Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe() // todoservice is a file in service folder, and method deleteTodo lives there
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo().subscribe(todo => {
      this.todos.push()
    })
  }

}
