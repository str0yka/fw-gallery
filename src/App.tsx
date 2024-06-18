import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from '~/utils/store';

import { ThemeWatcher } from './components';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeWatcher />
        <h1>Привет</h1>
      </Provider>
    </QueryClientProvider>
  );
};
