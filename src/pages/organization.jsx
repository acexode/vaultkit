import { Helmet } from 'react-helmet-async';

import OrganizationSharedDataView from 'src/sections/share-data/organization-shared-data-history';

export default function UserPage() {
  // const [open, setopen] = useState(false)

  // const handleVerificationModal = () => {
  //   setopen(!open)
  // }
  return (
    <>
      <Helmet>
        <title> Organization | Vaultkit  </title>
      </Helmet>

      <OrganizationSharedDataView />
    </>
  );
}
