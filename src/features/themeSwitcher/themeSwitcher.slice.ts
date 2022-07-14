import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';

import { Theme } from './themeSwitcher.types';

interface ThemeSwitcherState {
  theme: Theme;
}

const initialState: ThemeSwitcherState = {
  theme: 'dark',
};

export const themeSwitcherSlice = createSlice({
  name: 'ThemeSwitcher',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSwitcherSlice.actions;

export const selectTheme = (state: RootState) => state.themeSwitcher.theme;

export default themeSwitcherSlice.reducer;
