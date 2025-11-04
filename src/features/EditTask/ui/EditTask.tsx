import { Task, TaskCard } from '@entities/Task';
import { useEditTask } from '@features/EditTask/model/hooks/useEditTask';
import { TITLE_LENGTH } from '@features/EditTask/model/hooks/useValidation';
import { RemoveTask } from '@features/RemoveTask';
import { ToggleTaskCompleted } from '@features/ToggleTaskCompleted';
import { Button } from '@shared/ui/components/Button';
import { Input } from '@shared/ui/components/Input';
import { EditIcon } from '@shared/ui/icons/EditIcon';
import styles from './EditTask.module.css';

type EditTaskProps = {
  task: Task;
};

export const EditTask = (props: EditTaskProps) => {
  const { task } = props;

  const {
    isEditing,
    title,
    message,
    isError,
    inputRef,
    isSaveDisabled,
    setTitle,
    handleSave,
    handleEdit,
    handleKeyDown
  } = useEditTask({
    taskId: task.id,
    initialTitle: task.title
  });

  const messageClasses = [
    styles.message,
    isError ? styles.error : styles.helper
  ]
    .filter(Boolean)
    .join(' ');

  const textSlot = isEditing ? (
    <Input
      ref={inputRef}
      value={title}
      onChange={e => setTitle(e.target.value)}
      onKeyDown={handleKeyDown}
      maxLength={TITLE_LENGTH.Max}
    />
  ) : (
    <>
      <ToggleTaskCompleted taskId={task.id} completed={task.completed} />
      <p className={styles.title}>{task.title}</p>
    </>
  );

  const actionsSlot = isEditing ? (
    <>
      <Button onClick={handleSave} variant="primary" disabled={isSaveDisabled}>
        OK
      </Button>
      <RemoveTask taskId={task.id} />
    </>
  ) : (
    <>
      {!task.completed && (
        <Button
          variant="icon"
          onClick={handleEdit}
          className={styles.actionButton}
        >
          <EditIcon className={styles.icon} />
        </Button>
      )}
      <RemoveTask taskId={task.id} />
    </>
  );

  return (
    <div className={styles.wrapper}>
      <TaskCard task={task} text={textSlot} actions={actionsSlot} />
      {isEditing && <p className={messageClasses}>{message}</p>}
    </div>
  );
};
