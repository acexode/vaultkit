import axios from 'axios';
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

import google from 'src/assets/google.svg'
import { bgGradient } from 'src/theme/css';
import { authEndpoints } from 'src/configs/endpoints';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function OrganizationSignupView() {
  const theme = useTheme();

  const [isSubmtting, setisSubmtting] = useState(false)
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyEmail: '',
      password: '',
      
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company name is required"),
      companyEmail: Yup.string().email('Invalid email address').required('Company email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      setisSubmtting(true);
      const user = { user: {email: values.email, password: values.password} };
      
      try {
        const response = await axios.post(authEndpoints.signupUser, user);
        const token = response.headers.authorization;
        if(token && response?.status.code === 200) {
          sessionStorage.setItem("authToken", token)
          router.push('/');
          enqueueSnackbar(response?.status.message, { 
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "success"
          })
          setisSubmtting(false);
        }else {
          console.log('Login failed:', response.message);
        }
        
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
        setisSubmtting(false);
      } finally {
        setisSubmtting(false);
      }
    },
  });

  const renderForm = (
    <form  onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
      <TextField
          name="companyName"
          label="Company Name"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.companyName && Boolean(formik.errors.companyName)}
          helperText={formik.touched.companyName && formik.errors.companyName}
      />
        <TextField
          name="companyEmail"
          label="Company Email Address"
          value={formik.values.companyEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
          helperText={formik.touched.companyEmail && formik.errors.companyEmail}
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
      >
         {isSubmtting ? "Loading" : "Signup"}
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
