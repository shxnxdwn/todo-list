import { useShallow } from 'zustand/shallow';
import { selectors, useTaskStore } from '@entities/Task';
import { EditTask } from '@features/EditTask';
import styles from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useTaskStore(
    useShallow(state => selectors.filteredTasks(state))
  );
  const filter = useTaskStore(state => state.filter);

  if (tasks.length === 0) {
    const message =
      filter === 'all'
        ? 'Задач пока нет. Добавьте первую!'
        : 'Задач по этому фильтру нет.';
    return <p className={styles.emptyMessage}>{message}</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <EditTask key={task.id} task={task} />
      ))}
    </ul>
  );
};
