import { useState } from 'react';
import type { TodoItemProps } from '../lib/types';

const TodoItem = ({
  todo,
  onRemoveTodo,
  onCheckTodo,
  setTodos,
}: TodoItemProps) => {
  const [checked, setChecked] = useState(todo.completed);

  const handleCheckboxChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    onCheckTodo({ id: todo.id, setTodos });
  };

  return (
    <div className="flex relative top-30 left-30">
      <li className="flex justify-between items-center w-96">
        <p>{todo.id}</p>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <p className={checked ? 'line-through' : ''}>{todo.title}</p>
        <button
          onClick={() => onRemoveTodo({ id: todo.id, setTodos })}
          className="flex items-right"
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
