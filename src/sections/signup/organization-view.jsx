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

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import useAuth from 'src/hooks/useAuth';

import google from 'src/assets/google.svg'
import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function OrganizationSignupView() {
  const theme = useTheme();
  const {registerOrganization} = useAuth()

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password_confirmation: '',
      name: '',
      business_type: '',
      description: ''
      
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Company name is required"),
      email: Yup.string().email('Invalid email address').required('Company email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      business_type: Yup.string().required("Business type is required"),
      description: Yup.string().required("Description is required"),
      password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required') 
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
     
      try {
        const response = await registerOrganization(values)
        router.push('/login');
        enqueueSnackbar(response?.data.status.message, { 
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          variant: "success"
        })
      } catch (error) {
        
        if(error.response) {
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
    <form  onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
      <TextField
          name="name"
          label="Company Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
      />
        <TextField
          name="email"
          label="Company Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
          name="business_type"
          label="Business Type"
          value={formik.values.business_type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.business_type && Boolean(formik.errors.business_type)}
          helperText={formik.touched.business_type && formik.errors.business_type}
      />
      <TextField
          name="description"
          label="Business Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
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
        <TextField
          name="password_confirmation"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
          helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                  <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="en" sx={{ my: 3 }}>

      <Typography variant="body2" >
          Already have an account?
            <Link component={RouterLink} href="/login" variant="subtitle2" sx={{ ml: 0.5 }}>
              Login
            </Link>
          </Typography>
      </Stack>
     
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
         Signup
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
  

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: { xs: 1, md: '480px' },
            maxWidth: 480,
          }}
        >
          <Typography textAlign="center" variant="h6" >
            Sign up as an organization with your Google Account or use the form
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
