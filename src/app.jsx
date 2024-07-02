/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { SnackbarProvider } from 'notistack';
import { GlobalProvider } from './context/context';
import useAuth from './hooks/useAuth';
import LoadingScreen from './components/common/LoadingScreen';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const { isInitialized } = useAuth();
  return (
    <GlobalProvider>
      <SnackbarProvider>
        <ThemeProvider>{isInitialized ? <Router /> : <LoadingScreen />}</ThemeProvider>
      </SnackbarProvider>
    </GlobalProvider>
  );
}
