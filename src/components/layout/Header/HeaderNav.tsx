'use client';

import { type NavItem } from '@/content';
import { useActiveSection } from '@/features/active-section';
import { cn } from '@/lib/cn';

import styles from './Header.module.scss';

type Props = {
  items: NavItem[];
  label: string;
};

export function HeaderNav({ items, label }: Props) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <nav className={styles.nav} aria-label={label}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(styles.navLink, active === item.id && styles.active)}
          aria-current={active === item.id ? 'location' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
