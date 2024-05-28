/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { SnackbarProvider } from 'notistack';
import { GlobalProvider } from './context/context';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <GlobalProvider>
      <SnackbarProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>

      </SnackbarProvider>
    </GlobalProvider>
  );
}
