import type { Todo, TodoAddition, TodoModify } from './types';

export const addTodo = ({ title, todos, setTodos }: TodoAddition) => {
  const newTodo: Todo = { id: todos.length + 1, title, completed: false };
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};

export const removeTodo = ({ id, setTodos }: TodoModify) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const checkTodo = ({ id, setTodos }: TodoModify) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
};
