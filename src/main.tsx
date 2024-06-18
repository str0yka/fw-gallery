import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import '~/static/styles/reset.scss';
import '~/static/styles/variables.scss';
import '~/static/styles/fonts.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
