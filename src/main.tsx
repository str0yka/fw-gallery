import React from 'react';
import { createRoot } from 'react-dom/client';

import { ReduxProvider, TanstackQueryProvider } from '~/components/providers';

import { App } from './App.tsx';

import '~/static/styles/reset.scss';
import '~/static/styles/variables.scss';
import '~/static/styles/fonts.scss';
import '~/static/styles/theme.scss';
import '~/static/styles/global.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </TanstackQueryProvider>
  </React.StrictMode>,
);
