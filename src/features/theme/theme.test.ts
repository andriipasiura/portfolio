import { Script } from 'node:vm';

import { describe, expect, it } from 'vitest';

import { nextTheme, parseStoredTheme, resolveTheme, themeToggleLabel } from './theme';

describe('resolveTheme', () => {
  it('follows the system when no explicit choice was made', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
  });

  it('keeps an explicit choice regardless of the system', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
  });
});

describe('parseStoredTheme', () => {
  it('accepts only known themes', () => {
    expect(parseStoredTheme('light')).toBe('light');
    expect(parseStoredTheme('dark')).toBe('dark');
    expect(parseStoredTheme('system')).toBeNull();
    expect(parseStoredTheme('')).toBeNull();
    expect(parseStoredTheme(null)).toBeNull();
  });
});

describe('toggle helpers', () => {
  it('flips the theme and labels the action', () => {
    expect(nextTheme('dark')).toBe('light');
    expect(themeToggleLabel('dark')).toBe('Switch to light theme');
    expect(themeToggleLabel('light')).toBe('Switch to dark theme');
  });
});

describe('themeInitScript', () => {
  it('is a self-contained expression that embeds the storage key', async () => {
    const { themeInitScript } = await import('./theme-script');
    expect(themeInitScript).toContain('"theme"');
    expect(() => new Script(themeInitScript)).not.toThrow();
  });
});
