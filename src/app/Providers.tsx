import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { store } from '@/middleware/redux/redux.store';
import { queryClient } from '@/middleware/react-query/react-query.setup';

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          {children}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

interface ProvidersProps {
  children?: ReactNode;
}
