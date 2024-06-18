/* eslint-disable import/no-extraneous-dependencies */
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// console.log(clientId);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
