import { QueryCache, QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient';
import { createWebStoragePersister } from 'react-query/createWebStoragePersister';

const DEFAULT_STALE_TIME = 1000 * 10;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
      retry: false,
      onError: error => {
        console.error(error);
      },
      cacheTime: 1000 * 60 * 60 * 24,
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

const localStoragePersistor = createWebStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersistor,
});
