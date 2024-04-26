import { Helmet } from 'react-helmet-async';

// import { AccessView } from 'src/sections/access';
import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AccessPage() {
  return (
    <>
      <Helmet>
        <title> Access | Vaultkit App </title>
      </Helmet>

      {/* <AccessView /> */}
      <UserView />
    </>
  );
}
