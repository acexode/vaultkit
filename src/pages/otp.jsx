import { Helmet } from 'react-helmet-async';

import OTPInput from 'src/sections/login/otp-input';


// ----------------------------------------------------------------------

export default function OtpPage() {
  return (
    <>
      <Helmet>
        <title> Otp | Vaultkit App </title>
      </Helmet>

      <OTPInput />
    </>
  );
}
