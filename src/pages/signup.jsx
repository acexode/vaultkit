import { Helmet } from 'react-helmet-async';

import { SignupOverView } from 'src/sections/signup';



// ----------------------------------------------------------------------

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title> Signup | Vaultkit App </title>
      </Helmet>

      <SignupOverView />
    </>
  );
}
