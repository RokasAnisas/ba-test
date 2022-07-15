import axios from 'axios';
import { useQuery } from 'react-query';

import { useAppSelector } from '@/middleware/redux/redux.hooks';

import { selectGridSize, selectOffset } from './imageFeed.slice';
import { TrendingGifs } from './imageFeed.type';
import { IMAGE_FEED_SETTINGS } from './imageFeed.settings';

export const useGetTrendingGifs = () => {
  const gridSize = useAppSelector(selectGridSize);
  const offset = useAppSelector(selectOffset);

  const query = useQuery(
    ['trending-gifs', gridSize, offset],
    () =>
      axios.get<TrendingGifs>('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: import.meta.env.VITE_GIPHY_API_KEY,
          limit: gridSize,
          rating: 'g',
          offset,
        },
      }),
    {
      staleTime: IMAGE_FEED_SETTINGS.QUERY_STALE_TIME,
      select: response => response.data,
      keepPreviousData: true,
    }
  );

  return query;
};
