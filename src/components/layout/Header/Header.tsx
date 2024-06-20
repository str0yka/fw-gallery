import { DarkIcon, LightIcon, LogoIcon } from '~/components/ui/icons';
import { THEME } from '~/utils/constants';
import { themeActions, useDispatch, useTheme } from '~/utils/store';

import { Container } from '../Container/Container';

import s from './Header.module.scss';

export const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const toggleTheme = () => dispatch(themeActions.toggle());

  return (
    <Container
      component="header"
      className={s.container}
    >
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
    </Container>
  );
};
