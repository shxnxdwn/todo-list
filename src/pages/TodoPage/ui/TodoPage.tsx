import { HeaderLayout } from '@widgets/HeaderLayout';
import { MainLayout } from '@widgets/MainLayout';
import { TaskList } from '@widgets/TaskList';
import styles from './TodoPage.module.css';

export const TodoPage = () => {
  return (
    <div className={styles.container}>
      <HeaderLayout />
      <MainLayout>
        <TaskList />
      </MainLayout>
    </div>
  );
};
