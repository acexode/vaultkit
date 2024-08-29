import { Helmet } from 'react-helmet-async';

// import LandingView from 'src/sections/Landing/LandingView';
import LandingViewTwo from 'src/sections/Landing/LandingViewTwo';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title> Home | Vaultkit UI </title>
      </Helmet>

      <LandingViewTwo/>
    </>
  );
}
