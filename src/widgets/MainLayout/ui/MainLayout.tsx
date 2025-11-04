import type { ReactNode } from 'react';
import styles from './MainLayout.module.css';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return <main className={styles.main}>{children}</main>;
};
