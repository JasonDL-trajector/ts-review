import { useState } from 'react';
import { TodoInputProps } from '../lib/types';

const TodoInput = ({ onAddTodo, todos, setTodos }: TodoInputProps) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = () => {
    if (todoTitle.trim()) {
      onAddTodo(todoTitle, todos, setTodos);
      setTodoTitle('');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: 'full',
        gap: '10px',
      }}
    >
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        style={{
          border: '1px solid rgba(0, 0, 0, 0.2)',
          padding: '10px',
          borderRadius: '1rem',
        }}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
