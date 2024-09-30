import type { TodoListProps } from '../lib/types';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onRemoveTodo,
  onCheckTodo,
  setTodos,
}: TodoListProps) => {
  return (
    <div>
      <ol
        style={{
          listStyleType: 'decimal',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onCheckTodo={onCheckTodo}
            setTodos={setTodos}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
