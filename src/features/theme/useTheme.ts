'use client';

import { useCallback, useSyncExternalStore } from 'react';

import { THEME_STORAGE_KEY, type Theme } from './theme';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ['data-theme'] });
  return () => {
    observer.disconnect();
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function getServerSnapshot(): Theme {
  return 'dark';
}

function persist(value: Theme): boolean {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, value);
    return true;
  } catch {
    return false;
  }
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((value: Theme) => {
    document.documentElement.dataset.theme = value;
    persist(value);
  }, []);

  return { theme, setTheme };
}
