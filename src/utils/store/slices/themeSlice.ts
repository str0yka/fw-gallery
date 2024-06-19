import { createSlice } from '@reduxjs/toolkit';

import { THEME } from '~/utils/constants';
import { getTheme } from '~/utils/helpers';

const initialState: Theme = getTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => (state === THEME.DARK ? THEME.LIGHT : THEME.DARK),
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
