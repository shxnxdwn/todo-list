import { type RefObject, useEffect } from 'react';

type useFocusOnEditProps = {
  isEditing: boolean;
  ref: RefObject<HTMLInputElement | null>;
};

export const useFocusOnEdit = (props: useFocusOnEditProps) => {
  const { isEditing, ref } = props;

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing, ref]);
};
