import { useTaskStore } from '@entities/Task';
import { Checkbox } from '@shared/ui//components/Checkbox';

type ToggleTaskCompletedProps = {
  taskId: string;
  completed: boolean;
};

export const ToggleTaskCompleted = (props: ToggleTaskCompletedProps) => {
  const { taskId, completed } = props;
  const toggleTask = useTaskStore(state => state.toggleTaskCompleted);

  const handleChange = () => {
    toggleTask(taskId);
  };

  return <Checkbox checked={completed} onChange={handleChange} />;
};
