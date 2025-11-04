import { useTaskStore } from '@entities/Task';
import { Button } from '@shared/ui/components/Button';
import { TrashIcon } from '@shared/ui/icons/TrashIcon';
import styles from './RemoveTask.module.css';

type RemoveTaskProps = {
  taskId: string;
};

export const RemoveTask = (props: RemoveTaskProps) => {
  const { taskId } = props;
  const removeTask = useTaskStore(state => state.removeTask);

  const handleRemove = () => {
    removeTask(taskId);
  };

  return (
    <Button
      className={styles.removeButton}
      variant="icon"
      onClick={handleRemove}
    >
      <TrashIcon className={styles.icon} />
    </Button>
  );
};
