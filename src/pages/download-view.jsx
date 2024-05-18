import { Helmet } from 'react-helmet-async';

import { DownloadView } from 'src/sections/download-view';


// ----------------------------------------------------------------------

export default function DownloadViewPage() {
  return (
    <>
      <Helmet>
        <title> View & Download Data | Vaultkit App </title>
      </Helmet>

      <DownloadView />
    </>
  );
}
