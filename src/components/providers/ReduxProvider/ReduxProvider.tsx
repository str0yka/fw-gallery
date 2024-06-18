import { Provider } from 'react-redux';

import { store } from '~/utils/store';

import { ThemeWatcher } from './components';

interface ReduxProviderProps {
  children?: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}>
    <ThemeWatcher />
    {children}
  </Provider>
);
