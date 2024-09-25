import { useState } from 'react';
import { TodoItemProps } from '../lib/types';

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
    <div
      style={{
        display: 'flex',
        position: 'relative',
        top: '30px',
        left: '30px',
      }}
    >
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minWidth: '75%',
        }}
      >
        <p>{todo.id}</p>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
          {todo.title}
        </p>
        <button
          onClick={() => onRemoveTodo({ id: todo.id, setTodos })}
          style={{ display: 'flex', alignItems: 'right' }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
