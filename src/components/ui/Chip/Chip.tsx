import { type ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './Chip.module.scss';

type Props = {
  variant?: 'tag' | 'skill';
  icon?: ReactNode;
  children: ReactNode;
};

export function Chip({ variant = 'tag', icon, children }: Props) {
  return (
    <li className={cn(styles.chip, styles[variant])}>
      {icon}
      {children}
    </li>
  );
}
