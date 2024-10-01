import { useState } from 'react';
import { useTodoContext } from '../TodoContext';

const TodoInput = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo, todos, setTodos } = useTodoContext();

  const handleSubmit = () => {
    if (todoTitle.trim()) {
      addTodo({ title: todoTitle, todos, setTodos });
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
