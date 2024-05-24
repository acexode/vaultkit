import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'src/routes/hooks';

import { useAuth } from 'src/context/auth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.token) {
      router.push('/login');
    }
  }, [auth.token, router]);

  return <>{children}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
