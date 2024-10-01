import React, { createContext, useContext } from 'react';
import { Todo, TodoAddition, TodoModify } from './lib/types';

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: ({ title, todos, setTodos }: TodoAddition) => void;
  removeTodo: ({ id, setTodos }: TodoModify) => void;
  checkTodo: ({ id, setTodos }: TodoModify) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
