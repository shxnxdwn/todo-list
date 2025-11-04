import { useTaskStore } from '@entities/Task';
import { Button } from '@shared/ui/components/Button';

export const AddTask = () => {
  const createNewTask = useTaskStore(state => state.createNewTask);
  const editingTaskId = useTaskStore(state => state.editingTaskId);

  return (
    <Button onClick={createNewTask} disabled={!!editingTaskId}>
      Создать
    </Button>
  );
};
