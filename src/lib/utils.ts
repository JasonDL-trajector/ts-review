import { Todo, TodoModify } from './types';

export const addTodo = (
  title: string,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  console.log('rendered addTodo');
  const newTodo: Todo = { id: todos.length + 1, title, completed: false };
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};

export const removeTodo = ({ id, setTodos }: TodoModify) => {
  console.log('rendered removeTodo');
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const checkTodo = ({ id, setTodos }: TodoModify) => {
  console.log('rendered checkTodo');
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
};
