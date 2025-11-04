export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskFilter = 'all' | 'active' | 'completed';

export type TaskState = {
  tasks: Task[];
  editingTaskId: string | null;
  filter: TaskFilter;
};

export type TaskActions = {
  createNewTask: () => void;
  setEditingTaskId: (id: string | null) => void;
  editTask: (id: string, newTitle: string) => void;
  removeTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
  setFilter: (filter: TaskFilter) => void;
};
