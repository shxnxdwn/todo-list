import { useTaskStore } from '@entities/Task';
import type { TaskFilter } from '@entities/Task/model/types';
import { Button } from '@shared/ui/components/Button';
import styles from './TaskFilters.module.css';

const filters: { value: TaskFilter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' }
];

export const TaskFilters = () => {
  const currentFilter = useTaskStore(state => state.filter);
  const setFilter = useTaskStore(state => state.setFilter);

  return (
    <>
      {filters.map(({ value, label }) => (
        <li key={value} className={styles.filterItem}>
          <Button
            variant={currentFilter === value ? 'primary' : 'secondary'}
            onClick={() => setFilter(value)}
          >
            {label}
          </Button>
        </li>
      ))}
    </>
  );
};
