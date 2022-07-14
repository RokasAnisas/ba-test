import { QueryCache, QueryClient } from 'react-query';

const DEFAULT_STALE_TIME = 1000 * 10;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
      retry: false,
      onError: error => {
        console.error(error);
      },
    },
    mutations: {
      onError: error => {
        console.error(error);
      },
    },
  },
  queryCache: new QueryCache({
    onError: error => {
      console.error(error);
    },
  }),
});
