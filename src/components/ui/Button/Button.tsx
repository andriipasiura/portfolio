import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './Button.module.scss';

type Props = {
  href: string;
  variant?: 'accent' | 'outline' | 'subtle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  stretchOnMobile?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children'>;

export function Button({
  href,
  variant = 'accent',
  size = 'lg',
  icon,
  iconPosition = 'start',
  stretchOnMobile = false,
  className,
  children,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        stretchOnMobile && styles.stretch,
        className,
      )}
      {...rest}
    >
      {iconPosition === 'start' && icon}
      {children}
      {iconPosition === 'end' && icon}
    </a>
  );
}
