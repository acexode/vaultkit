import { Helmet } from 'react-helmet-async';

import SharedDataView from 'src/sections/share-data/shared-data-history';

// ----------------------------------------------------------------------

export default function SharedDataPage() {
  return (
    <>
      <Helmet>
        <title> Shared Data History | Vaultkit App </title>
      </Helmet>

      <SharedDataView />
    </>
  );
}
