
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Checkbox, FormControlLabel  } from '@mui/material';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import useAuth from 'src/hooks/useAuth';

import google from 'src/assets/google.svg';
import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function IndividualSignupView() {
  const theme = useTheme();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {registerIndiviual} = useAuth()
  const [showPassword, setShowPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      terms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      terms: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions').required('You must accept the Terms and Conditions'),
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        
        const response = await registerIndiviual(values)
        console.log(response)
        router.push('/dashboard');
          enqueueSnackbar(response?.data?.status.message, { 
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "success"
          })  
      } catch (error) {
        
        if(error.response) {
          // console.log(error?.response?.status);
          if (error?.response?.status === 422) {
            enqueueSnackbar(error?.response?.data?.status?.message, { 
              autoHideDuration: 3000,
              anchorOrigin: {
                vertical: "top",
                horizontal: "right"
              },
              variant: "error"
            })
          } else {
            console.error('Login error:', error.response.data);
          }
        } else {
          console.error('Network or server error:', error.message);
        }
        console.error('Login error:', error);
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
      

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
       
      <FormControlLabel
        control={
          <Checkbox
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
          />
        }
        label="Terms and Conditions"
      />
      </Stack>
      {formik.touched.terms && formik.errors.terms && (
        <div style={{display: "block", fontSize: "13px", color: "red"}}>{formik.errors.terms}</div>
      )}

      <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ mt: 3 }} loading={isSubmitting}>
        Signup
      </LoadingButton>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 1 }}>
       
       <Typography variant="body2">
         Already have an account?
         <Link component={RouterLink} href="/login" variant="subtitle2" sx={{ ml: 0.5 }}>
           Login
         </Link>
       </Typography>
     </Stack>
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
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: { xs: 1, md: '480px' },
            maxWidth: 480,
          }}
        >
          <Typography textAlign="center" variant="h6" >
            Sign up as an individual with your work Google account or use the form.
          </Typography>


          <Stack direction="row" spacing={2} pt={1}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <img src={google} width="24" alt="google logo" />
            </Button>
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
