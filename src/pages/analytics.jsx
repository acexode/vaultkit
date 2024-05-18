import { Helmet } from 'react-helmet-async';

import { AnalyticsView } from 'src/sections/analytics/view';



// ----------------------------------------------------------------------

export default function AnalyticssPage() {
  return (
    <>
      <Helmet>
        <title> Analytics | Vaultkit UI </title>
      </Helmet>

      <AnalyticsView />
    </>
  );
}
