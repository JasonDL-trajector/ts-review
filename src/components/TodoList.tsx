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
      <ol className="flex flex-col gap-10 list-decimal">
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
