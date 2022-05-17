import { Component, OnInit,Input, Output } from '@angular/core';
import { TaskModel } from 'src/models/todo.model';
import { EventEmitter } from '@angular/core';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService){}
  taskList: TaskModel[] = [];

  onHandleDelete(task: TaskModel){
    this.todoService.removeTask(task)
  }
  changeTaskStatus(task: TaskModel){
    this.todoService.changeTaskStatus(task);
  }

  ngOnInit(): void {
    this.taskList = this.todoService.getTasks()
    this.todoService.taskChanged.subscribe((event) => {
      this.taskList = event
    })
  }

}
