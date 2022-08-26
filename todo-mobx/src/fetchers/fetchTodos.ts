import axios from 'axios';
import { Todo } from '../models/Todo';

export const fetchTodos = () => {
   return axios
    .get(
      'https://rick-and-morty-73e35-default-rtdb.firebaseio.com/todos.json?api_key=AIzaSyBCWsAYggcmlyjaSMXAMdMZhL88JikBmUU',
    )
    .then((res) => res.data);
};

export const putTodos = (data: Todo[]) => {
  return axios
    .put(
      'https://rick-and-morty-73e35-default-rtdb.firebaseio.com/todos.json?api_key=AIzaSyBCWsAYggcmlyjaSMXAMdMZhL88JikBmUU',
      data,
    )
    .then((res) => res.data);
};
