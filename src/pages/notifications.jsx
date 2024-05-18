
import { Helmet } from 'react-helmet-async';

import { NotificationsView } from 'src/sections/notifications';


// ----------------------------------------------------------------------

export default function NotificationsPage() {
  return (
    <>
      <Helmet>
        <title> Notifications | Vaultkit App </title>
      </Helmet>

      <NotificationsView />
    </>
  );
}
