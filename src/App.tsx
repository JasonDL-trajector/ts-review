import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Todo, TodoModify } from './lib/types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { addTodo, removeTodo, checkTodo } from './lib/utils';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const memoizedAddTodo = useCallback((title: string) => {
    addTodo(title, todos, setTodos);
  }, []);

  const memoizedRemoveTodo = useCallback(({ id }: TodoModify) => {
    removeTodo({ id, setTodos });
  }, []);

  const memoizedCheckTodo = useCallback(({ id }: TodoModify) => {
    checkTodo({ id, setTodos });
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + TypeScript</h1>
      <div>
        <TodoInput
          onAddTodo={memoizedAddTodo}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          onRemoveTodo={memoizedRemoveTodo}
          onCheckTodo={memoizedCheckTodo}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
