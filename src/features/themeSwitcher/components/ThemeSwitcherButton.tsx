import { FC } from 'react';

import { useAppDispatch } from '@/middleware/redux/redux.hooks';

import { toggleTheme } from '../themeSwitcher.slice';

export const ThemeSwitcherButton: FC = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>;
};
