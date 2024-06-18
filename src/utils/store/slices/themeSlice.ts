import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { getTheme } from '~/utils/helpers';

const initialState: Theme = getTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<Theme>) => action.payload,
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
