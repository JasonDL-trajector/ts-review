import TodoItem from './TodoItem';
import { useTodoContext } from '../TodoContext';

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      <ol className="flex flex-col gap-10 list-decimal">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
