export const THEME_DEFAULT: Theme = 'dark';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const THEMES: Theme[] = Object.values(THEME);
