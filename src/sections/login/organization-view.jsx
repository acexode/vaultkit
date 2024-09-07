
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import useAuth from 'src/hooks/useAuth';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// import GoogleLoginComponent from './google-login-component';

// ----------------------------------------------------------------------

export default function OrganizationView() {
  const {OrganizationLogin} = useAuth()
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // const handleLoginSuccess = (tokenResponse) => {
  //   // Send the token response to server
  //   // fetch('http://localhost:3001/auth/google_oauth2/callback', {
  //   fetch('http://localhost:3001/google_auth', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //     body: JSON.stringify(tokenResponse),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Server response:', data);
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error);
  //     });
  // };

  // const handleLoginFailure = (error) => {
  //   console.log('Login failed: error:', error);
  // };

  const [showPassword, setShowPassword] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      
      const user = { organization: {email: values.email, password: values.password} };
      
      
      try {
        const resp = await OrganizationLogin(user)
        console.log(resp)
        router.push('/dashboard');
          enqueueSnackbar("Logged in successfully", { 
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "success"
          })
          setSubmitting(false);
      } catch (error) {
        if(error?.response?.status === 401){
          enqueueSnackbar("Invalid email or password", { 
            autoHideDuration: 3000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "error"
          })
        }
        setSubmitting(false);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const {  isSubmitting } = formik;
  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
      <TextField
          name="email"
          label="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" component={RouterLink} href="/reset-password" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </form>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Vaultkit</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link component={RouterLink} href="/signup" variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            {/* <GoogleLoginComponent onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} /> */}
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
