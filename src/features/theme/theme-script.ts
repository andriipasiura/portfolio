import { THEME_STORAGE_KEY, parseStoredTheme, resolveTheme } from './theme';

function initTheme(
  storageKey: string,
  parse: typeof parseStoredTheme,
  resolve: typeof resolveTheme,
) {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const readStored = () => {
    try {
      return parse(localStorage.getItem(storageKey));
    } catch {
      return null;
    }
  };
  const apply = () => {
    root.dataset.theme = resolve(readStored() ?? 'system', media.matches);
  };
  apply();
  media.addEventListener('change', apply);
  window.addEventListener('storage', apply);
}

export const themeInitScript = `(${initTheme.toString()})(${JSON.stringify(THEME_STORAGE_KEY)}, ${parseStoredTheme.toString()}, ${resolveTheme.toString()});`;
