import { ReduxProvider, TanstackQueryProvider } from './components';

export const App = () => {
  return (
    <TanstackQueryProvider>
      <ReduxProvider>
        <h1>Привет</h1>
      </ReduxProvider>
    </TanstackQueryProvider>
  );
};
