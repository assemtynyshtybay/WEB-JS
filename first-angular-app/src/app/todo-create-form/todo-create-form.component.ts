import { Component, OnInit, Output} from '@angular/core';
import { TaskModel } from 'src/models/todo.model';
import { EventEmitter } from '@angular/core';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.css']
})
export class TodoCreateFormComponent implements OnInit {
  taskText: string = '';
  constructor(private todoService: TodoService) {  }

  onHandleCreate(){
    const task = new TaskModel(this.taskText);
    this.todoService.addNewTask(task);
    this.taskText=''
  }

  ngOnInit(): void {

  }

}
