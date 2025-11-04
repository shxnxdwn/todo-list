import { AddTask } from '@features/AddTask';
import { Logo } from '@shared/ui//components/Logo';
import { FilterList } from '@widgets/FilterList';
import { TasksCounter } from '@widgets/TasksCounter';
import styles from './HeaderLayout.module.css';

export const HeaderLayout = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Logo />
        <div className={styles.actions}>
          <TasksCounter />
          <AddTask />
        </div>
      </div>
      <FilterList />
    </header>
  );
};
