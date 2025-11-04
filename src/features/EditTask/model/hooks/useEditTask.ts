import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTaskStore } from '@entities/Task';
import { useFocusOnEdit } from './useFocusOnEdit';
import { TITLE_LENGTH, useValidation } from './useValidation';

type UseEditTaskParams = {
  taskId: string;
  initialTitle: string;
};

export const useEditTask = (props: UseEditTaskParams) => {
  const { taskId, initialTitle } = props;
  const { editTask, editingTaskId, setEditingTaskId, removeTask } =
    useTaskStore();

  const isEditing = editingTaskId === taskId;
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSaveDisabled =
    title.trim().length < TITLE_LENGTH.Min ||
    title.trim().length > TITLE_LENGTH.Max;

  const { message, isError } = useValidation({
    title
  });

  useFocusOnEdit({ isEditing, ref: inputRef });

  const handleSave = useCallback(() => {
    if (isSaveDisabled) return;
    const trimmedTitle = title.trim();
    editTask(taskId, trimmedTitle);
    setEditingTaskId(null);
  }, [taskId, title, editTask, isSaveDisabled, setEditingTaskId]);

  useEffect(() => {
    if (!isEditing && initialTitle === '' && title === '') {
      removeTask(taskId);
    }
  }, [isEditing, initialTitle, title, taskId, removeTask]);

  const handleCancel = useCallback(() => {
    if (initialTitle === '') {
      removeTask(taskId);
    } else {
      setEditingTaskId(null);
    }
  }, [initialTitle, taskId, removeTask, setEditingTaskId]);

  const handleEdit = () => {
    setEditingTaskId(taskId);
  };

  const handleKeyDown = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === 'Enter') handleSave();
      if (evt.key === 'Escape') handleCancel();
    },
    [handleSave, handleCancel]
  );

  useEffect(() => {
    if (!isEditing) {
      setTitle(initialTitle);
    }
  }, [isEditing, initialTitle]);

  return {
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
  };
};
