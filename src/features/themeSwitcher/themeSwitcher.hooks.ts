import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from './themeSwitcher.slice';

export const useApplyTheme = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
};
