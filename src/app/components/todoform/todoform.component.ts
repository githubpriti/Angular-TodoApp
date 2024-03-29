import { TodoService } from './../../service/todo.service';
import { Todo } from './../../model/Todo';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit{

  todoTitle: string = "";
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

   // to add new todo
   handleAdd() {
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date(),
    };
    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
  }
}
