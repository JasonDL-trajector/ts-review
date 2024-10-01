import { useState } from 'react';
import { addTodo, removeTodo, checkTodo } from './lib/utils';
import type { Todo } from './lib/types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import reactLogo from './assets/react.svg';
import './App.css';
import { TodoContext } from './TodoContext';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          addTodo,
          removeTodo,
          checkTodo,
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-center text-3xl font-bold">React + TypeScript</h1>
        <div>
          <TodoInput />
          <TodoList />
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
