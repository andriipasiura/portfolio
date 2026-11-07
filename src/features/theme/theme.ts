export type Theme = 'light' | 'dark';

export type ThemePreference = Theme | 'system';

export const THEME_STORAGE_KEY = 'theme';

export function parseStoredTheme(value: string | null | undefined): Theme | null {
  return value === 'light' || value === 'dark' ? value : null;
}

export function resolveTheme(preference: ThemePreference, systemPrefersDark: boolean): Theme {
  if (preference === 'system') return systemPrefersDark ? 'dark' : 'light';
  return preference;
}

export function nextTheme(current: Theme): Theme {
  return current === 'dark' ? 'light' : 'dark';
}

export function themeToggleLabel(current: Theme): string {
  return `Switch to ${nextTheme(current)} theme`;
}
