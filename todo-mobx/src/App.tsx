import React, { useEffect } from "react";
import './App.css';
import { observer } from "mobx-react-lite";
import TodoForm from './components/todos/todoForm';
import { store } from "./models/Store";
import TodoItem from "./components/todos/todoItem";
import InfoForm from "./components/alis/InfoForm";
import { Route } from "react-router";

const App = observer(() => {
  useEffect(() => {
    // store.loadTodos();
  }, []);
  
  return (
    <div style={{}}>
        <Router>
            <Routes>
                <Route path="/" element={<InfoForm/>} />
            </Routes>
        </Router>
      <InfoForm/>
      {/* <TodoForm />
      {store.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button onClick={() => store.saveTodos()}>save todos</button>
      <button onClick={() => store.loadTodos()}>update todos</button> */}
    </div>
  );
});

export default App;
