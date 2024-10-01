export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoInputProps {
  onAddTodo: (
    title: string,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => void;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoListProps {
  onRemoveTodo: ({ id, setTodos }: TodoModify) => void;
  onCheckTodo: ({ id, setTodos }: TodoModify) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoItemProps {
  todo: Todo;
}

export interface TodoAddition {
  title: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoModify {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
