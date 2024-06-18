import { THEME, THEME_DEFAULT } from '~/utils/constants';

import { isTheme } from './isTheme';

export const getTheme = () => {
  const theme = window?.localStorage?.getItem('theme');
  if (isTheme(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return THEME.LIGHT;

  return THEME_DEFAULT;
};
