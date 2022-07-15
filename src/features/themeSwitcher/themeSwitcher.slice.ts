import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';

import { Theme } from './themeSwitcher.types';
import { storage } from '../storage/storage.functions';

interface ThemeSwitcherState {
  theme: Theme;
}

const initialState: ThemeSwitcherState = {
  theme: (storage.get('app_theme') as Theme) ?? 'dark',
};

export const themeSwitcherSlice = createSlice({
  name: 'ThemeSwitcher',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      storage.set('app_theme', action.payload);
    },
  },
});

export const { setTheme } = themeSwitcherSlice.actions;

export const selectTheme = (state: RootState) => state.themeSwitcher.theme;

export default themeSwitcherSlice.reducer;
