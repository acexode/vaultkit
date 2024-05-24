/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalProvider } from './context/context';
import AuthProvider from './context/auth';

const queryClient = new QueryClient();

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalProvider>
  );
}
