import type { Task } from '@entities/Task/model/types';

export const mockTasks: Task[] = [
  { id: '1', title: 'Покормить кота', completed: true },
  { id: '2', title: 'Купить продукты', completed: false },
  { id: '3', title: 'Заказать футболку', completed: false }
];
