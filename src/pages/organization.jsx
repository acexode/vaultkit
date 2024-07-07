import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import AlertDialog from 'src/sections/modal/modal';
import VerificationView from 'src/sections/profile/verification-view';
import OrganizationProfileView from 'src/sections/profile/organization-profile-view';

export default function UserPage() {
  const [open, setopen] = useState(false)

  const handleVerificationModal = () => {
    setopen(!open)
  }
  return (
    <>
      <Helmet>
        <title> Organization | Vaultkit  </title>
      </Helmet>

      <OrganizationProfileView handleVerificationModal={handleVerificationModal} />
      <AlertDialog handleClose={handleVerificationModal} fullWidth maxWidth="md" title="Data Verification" component={<VerificationView handleCloseModal={handleVerificationModal} />} open={open} />
    </>
  );
}
