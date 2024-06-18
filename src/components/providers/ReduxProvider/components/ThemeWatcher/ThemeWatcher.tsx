import { useEffect } from 'react';

import { LOCAL_STORAGE_KEY } from '~/utils/constants';
import { useTheme } from '~/utils/store';

export const ThemeWatcher = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.classList.add(theme);

    localStorage.setItem(LOCAL_STORAGE_KEY.THEME, theme);

    return () => document.body.classList.remove(theme);
  }, [theme]);

  return null;
};
