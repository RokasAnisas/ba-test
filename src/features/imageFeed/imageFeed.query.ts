import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TrendingGifs } from './imageFeed.type';

export const imageFeedQuery = createApi({
  reducerPath: 'imageFeedQuery',
  baseQuery: fetchBaseQuery({
    // baseUrl: `https://api.giphy.com/v1/gifs/trending?api_key=${
    //   import.meta.env.GIPHY_API_KEY
    // }`,
    baseUrl: 'https://api.giphy.com/v1/gifs',
  }),
  endpoints: builder => ({
    getTrendingGifs: builder.query<TrendingGifs, number>({
      query: count => {
        return {
          url: 'trending',
          params: {
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
            limit: count,
            rating: 'g',
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTrendingGifsQuery } = imageFeedQuery;

// https://api.giphy.com/v1/gifs/trending?api_key=I3kjiwoGamraH29weZL9l3cUZQc8iLwm&limit=2&rating=g
