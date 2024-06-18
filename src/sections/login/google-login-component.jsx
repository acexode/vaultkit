import React from 'react';
import PropTypes from 'prop-types';
import { useGoogleLogin } from '@react-oauth/google';

import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import google from 'src/assets/google.svg';

const GoogleLoginComponent = ({ onSuccess, onFailure }) => {
  const theme = useTheme();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onSuccess(tokenResponse),
    onError: (error) => onFailure(error),
    flow: 'auth-code',
  });

  return (
    <Button
    fullWidth
    onClick={login}
    size="large"
    color="inherit"
    variant="outlined"
    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
  >
    <img src={google} width="24" alt="google logo" />
  </Button>

  );
};

GoogleLoginComponent.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default GoogleLoginComponent;
