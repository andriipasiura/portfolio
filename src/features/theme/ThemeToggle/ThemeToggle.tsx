'use client';

import { Moon, Sun } from 'lucide-react';

import { IconButton } from '@/components/ui/IconButton';

import { nextTheme, themeToggleLabel } from '../theme';
import { useTheme } from '../useTheme';

import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const label = themeToggleLabel(theme);

  return (
    <IconButton
      label={label}
      onClick={() => {
        setTheme(nextTheme(theme));
      }}
    >
      <Sun className={styles.sun} size={16} strokeWidth={1.5} aria-hidden />
      <Moon className={styles.moon} size={16} strokeWidth={1.5} aria-hidden />
    </IconButton>
  );
}
