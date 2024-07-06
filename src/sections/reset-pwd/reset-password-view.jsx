import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, useFormik, FormikProvider } from 'formik';
// material

import axios from 'axios';
import { useSnackbar } from 'notistack';

import { LoadingButton } from '@mui/lab';
import { Alert, Stack, TextField } from '@mui/material';

// import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import { authEndpoints } from 'src/configs/endpoints';

// import { authEndpoints } from 'src/configs/endpoints';

// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func
};

export default function ResetPasswordForm({ onSent, onGetEmail }) {
  // const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const data = { email: values.email }
        const response = await axios.post(authEndpoints.resetPassword, data)
        if(response?.status === 200){
          enqueueSnackbar(response?.data.message, { 
            autoHideDuration: 3000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            variant: "success"
          })
        }
        if (isMountedRef.current) {
          onSent();
          onGetEmail(formik.values.email);
          setSubmitting(false);
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
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            {...getFieldProps('email')}
            type="email"
            label="Email address"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Reset Password
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
