import clsx from 'clsx';

import { DarkIcon, LightIcon, LogoIcon } from '~/components/ui/icons';
import { THEME } from '~/utils/constants';
import { themeActions, useDispatch, useTheme } from '~/utils/store';

import { Grid } from '../Grid/Grid';

import s from './Header.module.scss';

export const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const toggleTheme = () => dispatch(themeActions.toggle());

  return (
    <Grid
      component="header"
      className={clsx(s.wrapper, s[theme])}
    >
      <div className={s.container}>
        <LogoIcon className={s.logo} />
        <button
          type="button"
          onClick={toggleTheme}
          className={s['toggle-theme-button']}
        >
          {theme === THEME.DARK ? (
            <DarkIcon className={s['toggle-theme-dark-icon']} />
          ) : (
            <LightIcon className={s['toggle-theme-light-icon']} />
          )}
        </button>
      </div>
    </Grid>
  );
};
