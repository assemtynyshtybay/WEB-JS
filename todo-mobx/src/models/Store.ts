import { makeAutoObservable, reaction, toJS } from "mobx";
import { Todo } from "./Todo";
import { fetchTodos, putTodos } from "../fetchers/fetchTodos";

export class Store {
  todos: Todo[];
  loading: boolean = false;
  constructor(todos: Todo[]) {
    this.todos = todos;
    makeAutoObservable(this);
  }

  *loadTodos() {
    this.loading = true;
    try {
      const data: Todo[] = yield fetchTodos();
      console.log("fetched", data);
      this.todos = data;
    } catch (e) {
      console.log("error while fetching todos", e);
    } finally {
      this.loading = false;
    }
  }

  *saveTodos() {
    yield putTodos(this.todos);
  }
}

export const store = new Store([]);

// reaction(
//   () => store.todos.map((todo => toJS(todo))),
//   (todos) => {
//     store.saveTodos()
//     console.log(todos);
//   }
// );
