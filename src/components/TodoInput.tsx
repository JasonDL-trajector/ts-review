import { useState } from 'react';
import type { TodoInputProps } from '../lib/types';

const TodoInput = ({ onAddTodo, todos, setTodos }: TodoInputProps) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = () => {
    if (todoTitle.trim()) {
      onAddTodo(todoTitle, todos, setTodos);
      setTodoTitle('');
    }
  };
  return (
    <div className="flex justify-center w-full gap-10 my-10">
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="border border-gray-200 rounded-md p-[10px]"
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
