import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

type ToDoType = {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent {
  todoListEndpoint: string = protectedResources.apiTodoList.endpoint;
  todoList: ToDoType[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.http.get(this.todoListEndpoint)
      .subscribe(todoList => {
        this.todoList = todoList as ToDoType[]
      });
  }
}
