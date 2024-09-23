// Define TaskStatus enum
enum TaskStatus {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

// Define Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  status: TaskStatus;
}

// Define TaskList type
type TaskList = Task[];

// Creates a sample task list
const createSampleTasks = (): TaskList => {
  return [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, and bread',
      completed: false,
      dueDate: new Date('2024-09-30'),
      status: TaskStatus.Pending,
    },
    {
      id: 2,
      title: 'Finish report',
      description: 'Complete the annual report',
      completed: true,
      dueDate: new Date('2024-09-25'),
      status: TaskStatus.Completed,
    },
    {
      id: 3,
      title: 'Clean the house',
      description: 'Living room, kitchen, and bathroom',
      completed: false,
      dueDate: new Date('2024-10-05'),
      status: TaskStatus.InProgress,
    },
  ];
};

console.log(createSampleTasks());

// updates the status of task with id 1 to completed
const updateTaskStatus = (
  tasks: TaskList,
  id: number,
  newStatus: TaskStatus
): TaskList => {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: newStatus } : task
  );
};

const tasks = createSampleTasks();
console.log(updateTaskStatus(tasks, 1, TaskStatus.Completed));

// filters tasks by status
const filterTasksByStatus = (tasks: TaskList, status: TaskStatus): TaskList => {
  return tasks.filter((task) => task.status === status);
};

console.log(filterTasksByStatus(tasks, TaskStatus.Pending));
