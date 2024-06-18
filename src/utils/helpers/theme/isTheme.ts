import { THEMES } from '~/utils/constants';

export const isTheme = (value: unknown): value is Theme => THEMES.some((theme) => theme === value);
