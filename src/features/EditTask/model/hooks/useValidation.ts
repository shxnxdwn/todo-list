import { useMemo } from 'react';

export const TITLE_LENGTH = {
  Min: 5,
  Max: 50
};

type UseValidationProps = {
  title: string;
};

export const useValidation = (props: UseValidationProps) => {
  const { title } = props;
  const { message, isError } = useMemo(() => {
    const trimmedLength = title.trim().length;

    if (trimmedLength < TITLE_LENGTH.Min) {
      return {
        message: `Минимум ${TITLE_LENGTH.Min} символов`,
        isError: true
      };
    }

    if (title.length >= TITLE_LENGTH.Max) {
      return {
        message: `Максимум ${TITLE_LENGTH.Max} символов`,
        isError: true
      };
    }

    return {
      message: 'Нажмите Enter или ОК для сохранения, Esc для отмены',
      isError: false
    };
  }, [title]);

  return { message, isError };
};
