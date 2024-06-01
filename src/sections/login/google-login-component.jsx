import React from 'react';
import PropTypes from 'prop-types';
import { useGoogleLogin } from '@react-oauth/google';

import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

const GoogleLoginComponent = ({ onSuccess, onFailure }) => {
  const theme = useTheme();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onSuccess(tokenResponse),
    onError: (error) => onFailure(error),
    flow: 'auth-code',
  });

  return (
    <Button
      onClick={login}
      fullWidth
      size="large"
      color="inherit"
      variant="outlined"
      sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
    >
      <Iconify icon="eva:google-fill" color="#DF3E30" />
    </Button>
  );
};

GoogleLoginComponent.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default GoogleLoginComponent;
