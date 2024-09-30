import { useCallback } from 'react';
import type { Todo, TodoModify } from './types';

export const addTodo = useCallback(
  (
    title: string,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => {
    const newTodo: Todo = { id: todos.length + 1, title, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  },
  []
);

export const removeTodo = useCallback(({ id, setTodos }: TodoModify) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
}, []);

export const checkTodo = useCallback(({ id, setTodos }: TodoModify) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
}, []);
