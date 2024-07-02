import { Helmet } from 'react-helmet-async';

import LandingView from 'src/sections/Landing/LandingView';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title> Home | Vaultkit UI </title>
      </Helmet>

      <LandingView/>
    </>
  );
}
