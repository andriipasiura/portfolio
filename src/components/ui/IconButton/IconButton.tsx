import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './IconButton.module.scss';

type Common = {
  label: string;
  variant?: 'outline' | 'round' | 'bare';
  className?: string;
  children: ReactNode;
};

type AsButton = Common &
  Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'> & { href?: undefined };

type AsLink = Common &
  Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className'> & { href: string };

export function IconButton(props: AsButton | AsLink) {
  const { label, variant = 'outline', className, children, ...rest } = props;
  const classes = cn(styles.iconButton, styles[variant], className);

  if (rest.href !== undefined) {
    return (
      <a {...rest} className={classes} aria-label={label} title={label}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={classes} aria-label={label} title={label}>
      {children}
    </button>
  );
}
