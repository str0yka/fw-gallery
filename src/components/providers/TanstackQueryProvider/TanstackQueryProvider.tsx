import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface TanstackQueryProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const TanstackQueryProvider: React.FC<TanstackQueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
