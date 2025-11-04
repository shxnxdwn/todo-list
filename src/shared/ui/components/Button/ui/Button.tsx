import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'danger' | 'secondary' | 'icon';
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant = 'primary',
    type = 'button',
    ...restProps
  } = props;

  const buttonClasses = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} type={type} {...restProps}>
      {children}
    </button>
  );
};
