import { TaskFilters } from '@features/TaskFilters';
import styles from './FilterList.module.css';

export const FilterList = () => {
  return (
    <ul className={styles.list}>
      <TaskFilters />
    </ul>
  );
};
