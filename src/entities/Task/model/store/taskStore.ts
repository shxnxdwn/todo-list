import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockTasks } from '@entities/Task/model/mock/mockTasks';
import { generateId } from '@shared/lib/utils/generateId';
import type { TaskActions, TaskState } from '../types';

export const useTaskStore = create<TaskState & TaskActions>()(
  persist(
    (set, get) => ({
      tasks: mockTasks,
      editingTaskId: null,
      filter: 'all',

      createNewTask: () => {
        if (get().editingTaskId) return;
        const newId = generateId();
        set(state => ({
          tasks: [...state.tasks, { id: newId, title: '', completed: false }],
          editingTaskId: newId
        }));
      },

      setEditingTaskId: id => set({ editingTaskId: id }),

      editTask: (id, newTitle) =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
          )
        })),

      removeTask: id => {
        if (get().editingTaskId === id) {
          set({ editingTaskId: null });
        }
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id)
        }));
      },

      toggleTaskCompleted: id =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        })),

      setFilter: filter => set({ filter })
    }),
    {
      name: 'tasks-storage'
    }
  )
);

export const selectors = {
  activeTasksCount: (state: TaskState) =>
    state.tasks.filter(task => !task.completed).length,

  filteredTasks: (state: TaskState) => {
    const { tasks, filter } = state;
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
};
