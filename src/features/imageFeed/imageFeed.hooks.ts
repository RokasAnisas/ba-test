import { useEffect } from 'react';

import { useAppDispatch } from '@/middleware/redux/redux.hooks';

import { getNewImages } from './imageFeed.slice';

export const useUpdateOnSpace = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        dispatch(getNewImages());
      }
    };

    document.addEventListener('keyup', callback);

    return () => {
      document.removeEventListener('keyup', callback);
    };
  }, [dispatch]);
};
