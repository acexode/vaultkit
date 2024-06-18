import { Helmet } from 'react-helmet-async';

import { SignupOverView } from 'src/sections/signup';



// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Vaultkit App </title>
      </Helmet>

      <SignupOverView />
    </>
  );
}
