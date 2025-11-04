import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { CheckmarkIcon } from '@shared/ui/icons/CheckmarkIcon';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'input'>;

export const Checkbox = (props: CheckboxProps) => {
  const { className, children, ...restProps } = props;

  const labelClasses = [styles.label, className].filter(Boolean).join(' ');

  return (
    <label className={labelClasses}>
      <input type="checkbox" className={styles.input} {...restProps} />
      <span className={styles.customCheckbox}>
        <CheckmarkIcon className={styles.checkmarkIcon} />
      </span>
      {children && <span className={styles.labelText}>{children}</span>}
    </label>
  );
};
