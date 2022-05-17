import { EventEmitter } from "@angular/core";
import { TaskModel } from "src/models/todo.model";
const localStorageKey='todos'
const initialTasks = JSON.stringify(
  [
    new TaskModel('First task'),
    new TaskModel('Second task')
  ]
)
export class TodoService {
  private tasks: TaskModel[] = JSON.parse(localStorage.getItem(localStorageKey) ?? initialTasks);
  taskChanged = new EventEmitter<TaskModel[]>();

  getTasks() {
    return [...this.tasks]
  }

  emitChanges(){
    localStorage.setItem(localStorageKey,JSON.stringify(this.getTasks()))
    this.taskChanged.emit(this.getTasks())
  }

  addNewTask(task: TaskModel) {
    this.tasks.push(task);
    this.emitChanges()
  }

  changeTaskStatus(task: TaskModel){
    if(task.done){
      task.done = false
    }
    else{
      task.done = true;
    }
    this.tasks =  this.tasks.filter(t => t.id !== task.id)
    this.tasks.push(task);
    this.emitChanges();
  }

  removeTask(task: TaskModel) {
    this.tasks = this.tasks.filter(t => t.id !== task.id)
    this.emitChanges()
  }
}