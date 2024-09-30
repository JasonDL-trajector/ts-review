import { useState } from 'react';
import { addTodo, removeTodo, checkTodo } from './lib/utils';
import type { Todo } from './lib/types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center text-3xl font-bold">React + TypeScript</h1>
      <div>
        <TodoInput onAddTodo={addTodo} todos={todos} setTodos={setTodos} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onCheckTodo={checkTodo}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
