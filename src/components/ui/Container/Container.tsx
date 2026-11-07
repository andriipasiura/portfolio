import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { cn } from '@/lib/cn';

import styles from './Container.module.scss';

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = 'div'>({ as, className, ...rest }: Props<T>) {
  const Tag: ElementType = as ?? 'div';
  return <Tag className={cn(styles.container, className as string | undefined)} {...rest} />;
}
