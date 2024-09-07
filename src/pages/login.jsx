import { Helmet } from 'react-helmet-async';

import LoginOverView from 'src/sections/login/LoginOverview';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Vaultkit App </title>
      </Helmet>

      <LoginOverView />
    </>
  );
}
