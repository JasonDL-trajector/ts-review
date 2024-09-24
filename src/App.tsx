import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Todo } from './types/models';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { addTodo, removeTodo, checkTodo } from './utils/helpers';
// import { person } from './ts/es6';
// import { printStudent } from './ts/spread';
// import {
//   usersArray,
//   findUserByName,
//   getSummary,
//   getUserNames,
// } from './ts/array';

function App() {
  // const { totalUsers, averageAge } = getSummary();
  // const { id, name, age } = findUserByName(usersArray, 'Alice')!;

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + TypeScript</h1>
      {/* <div className="card">
        <p>{person()}</p>
        <p>{printStudent()}</p>

        <br />
        <p>{getUserNames()}</p>
        <p>{`Total users: ${totalUsers}`}</p>
        <p>{`Average age: ${averageAge}`}</p>

        <p>Alice's data: {`id: ${id}, name: ${name}, age: ${age}`}</p>
      </div> */}

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
