import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';

import useAuth from 'src/hooks/useAuth';

const OrgProtectedRoute = ({ redirectPath = '/login' }) => {
  const isAuthenticated = !!sessionStorage.getItem('authToken');
  const {user} = useAuth()
  console.log(user);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  if (!user.business_type) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

OrgProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
};

export default OrgProtectedRoute;
