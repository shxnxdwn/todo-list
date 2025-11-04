import { ReactNode } from 'react';
import type { Task } from '@entities/Task';
import styles from './TaskCard.module.css';

type TaskCardProps = {
  task: Task;
  text?: ReactNode;
  actions?: ReactNode;
};

export const TaskCard = (props: TaskCardProps) => {
  const { task, text, actions } = props;

  const cardClasses = [styles.card, task.completed ? styles.completed : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={cardClasses}>
      <div className={styles.content}>{text}</div>
      <div className={styles.actions}>{actions}</div>
    </li>
  );
};
