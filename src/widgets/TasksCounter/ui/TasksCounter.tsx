import { useTaskStore, selectors } from '@entities/Task';
import styles from './TasksCounter.module.css';

const pluralRules = new Intl.PluralRules('ru-RU');

const wordForms = {
  zero: 'задач',
  one: 'задача',
  two: 'задачи',
  few: 'задачи',
  many: 'задач',
  other: 'задачи'
};

export const TasksCounter = () => {
  const activeTasksCount = useTaskStore(selectors.activeTasksCount);

  const rule = pluralRules.select(activeTasksCount);
  const taskWord = wordForms[rule];

  return (
    <p className={styles.counter}>
      Невыполненных: {activeTasksCount} {taskWord}
    </p>
  );
};
