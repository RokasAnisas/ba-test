import axios from 'axios';
import { useQuery } from 'react-query';

import { TrendingGifs } from './imageFeed.type';

export const useGetTrendingGifs = (count: number, offset?: number) => {
  const query = useQuery(
    ['trending-gifs', count, offset],
    () =>
      axios.get<TrendingGifs>('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: import.meta.env.VITE_GIPHY_API_KEY,
          limit: count,
          rating: 'g',
          offset,
        },
      }),
    {
      staleTime: 1000 * 60 * 60 * 24,
      select: response => response.data,
    }
  );

  return query;
};
