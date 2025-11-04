import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
  className?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'ref'>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type = 'text', ...restProps } = props;

  const inputClasses = [styles.input, className].filter(Boolean).join(' ');

  return (
    <input ref={ref} className={inputClasses} type={type} {...restProps} />
  );
});

Input.displayName = 'Input';
