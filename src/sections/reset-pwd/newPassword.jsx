import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { queryParamsToObject } from 'src/utils/crud-utils';

import { bgGradient } from 'src/theme/css';
import { authEndpoints } from 'src/configs/endpoints';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function NewPasswordView() {
  const theme = useTheme();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { search } = useLocation();
  const queryObject = queryParamsToObject(search);
  console.log(queryObject);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirmation: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const data = { user: {...values, token: queryObject.token }}
        const response = await axios.patch(authEndpoints.resetPassword, data)
        if(response?.status === 200){
          enqueueSnackbar(response?.data.message, { 
            autoHideDuration: 3000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "success"
          })
          router.push('/login');
        }
      } catch (error) {
        if(error?.response?.status === 404){
          enqueueSnackbar("Email Not Found", { 
            autoHideDuration: 3000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "error"
          })
        }
      }
    },
  });

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3} mb={3}>
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
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
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
          helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
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

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={formik.isSubmitting}
      >
        Reset Password
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
        width: 480
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
            px: 5,
            py: 4,
            width: {  md: 560, xs: 1 },
          }}
        >
          <Typography variant="h4" mb={2}>Reset Password</Typography>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
