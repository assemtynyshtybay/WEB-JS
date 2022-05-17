import { Component, OnInit, Output } from '@angular/core';
import { TaskModel } from 'src/models/todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
