import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import AlertDialog from 'src/sections/modal/modal';
import { ProfileView } from 'src/sections/profile/view';
import VerificationView from 'src/sections/profile/verification-view';

export default function UserPage() {
  const [open, setopen] = useState(false)

  const handleVerificationModal = () => {
    setopen(!open)
  }
  return (
    <>
      <Helmet>
        <title> User | Vaultkit UI </title>
      </Helmet>

      <ProfileView handleVerificationModal={handleVerificationModal} />
      <AlertDialog handleClose={handleVerificationModal} fullWidth maxWidth="md" title="Data Verification" component={<VerificationView handleCloseModal={handleVerificationModal} />} open={open} />
    </>
  );
}
