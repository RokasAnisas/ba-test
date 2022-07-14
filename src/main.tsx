import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from '@/app/Providers';

import { App } from './App';
import './styles/vendor/_index.scss';
import './styles/global/_index.scss';
import './styles/theme/_index.scss';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
