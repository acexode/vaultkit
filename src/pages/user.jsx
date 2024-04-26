import { Helmet } from 'react-helmet-async';

import { ProfileView } from 'src/sections/profile/view';

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Vaultkit UI </title>
      </Helmet>

      <ProfileView />
    </>
  );
}
