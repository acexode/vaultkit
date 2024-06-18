import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { Box, Button, styled, Container, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import SentIcon from 'src/assets/sentIcon';

import { NewPasswordView, ResetPasswordView } from 'src/sections/reset-pwd';

// ----------------------------------------------------------------------
const RootStyle = styled(Container)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  }));

export default function ResetPage() {
  const route = useLocation()
  console.log(route.search.split("="));
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
  return (
    <>
      <Helmet>
        <title> Reset Password | Vaultkit App </title>
      </Helmet>
      <RootStyle>
        {route.search.includes('token') ? 
        <NewPasswordView />
        :
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          {!sent ? (
            <>
              <Typography variant="h3" paragraph>
                Forgot your password?
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                Please enter the email address associated with your account and We will email you a link to reset your
                password.
              </Typography>

              <ResetPasswordView onSent={() => setSent(true)} onGetEmail={(value) => setEmail(value)} />

              <Button fullWidth size="large" component={RouterLink} href="/login" sx={{ mt: 1 }}>
                Back
              </Button>
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />

              <Typography variant="h3" gutterBottom>
                Request sent successfully
              </Typography>
              <Typography>
                We have sent a confirmation email to &nbsp;
                <strong>{email}</strong>
                <br />
                Please check your email.
              </Typography>

              <Button size="large" variant="contained" component={RouterLink} to="/login" sx={{ mt: 5 }}>
                Back
              </Button>
            </Box>
          )}
        </Box>

      }
      </RootStyle>
    </>
  );
}
