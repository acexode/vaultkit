import * as Yup from 'yup';
import { useCallback } from 'react';
import { enqueueSnackbar } from 'notistack';
import { Form, useFormik, FormikProvider } from 'formik';

import { LoadingButton } from '@mui/lab';
// material
import {
  Box,
  Grid,
  Card,
  Stack,
  Switch,
  TextField,
  Typography,
  FormHelperText,
  FormControlLabel
} from '@mui/material';

import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import countries from 'src/_mock/countries';
import UploadAvatar from 'src/layouts/dashboard/common/UploadAvatar';


// hooks
// import useAuth from '../../../../hooks/useAuth';
// utils


// ----------------------------------------------------------------------

export default function MainProfileView() {
  const isMountedRef = useIsMountedRef();
  const { user, updateProfile } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      displayName: user?.basic?.first_name || '',
      email: user?.email,
      photoURL: user?.photoURL,
      phoneNumber: user?.phoneNumber,
      country: user?.country,
      address: user?.address,
      state: user?.state,
      city: user?.city,
      zipCode: user?.zipCode,
      isPublic: user?.isPublic
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await updateProfile({ ...values });
        enqueueSnackbar('Update success', { variant: 'success' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      }
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('photoURL', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
              <UploadAvatar
                accept="image/*"
                file={values.photoURL}
                maxSize={3145728}
                onDrop={handleDrop}
                error={Boolean(touched.photoURL && errors.photoURL)}
                caption={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                  </Typography>
                }
              />

              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {touched.photoURL && errors.photoURL}
              </FormHelperText>

              <FormControlLabel
                control={<Switch {...getFieldProps('isPublic')} color="primary" />}
                labelPlacement="start"
                label="Deactivate account"
                sx={{ mt: 5 }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Name" {...getFieldProps('displayName')} />
                  <TextField fullWidth disabled label="Email Address" {...getFieldProps('email')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Phone Number" {...getFieldProps('phoneNumber')} />
                  <TextField fullWidth label="Address" {...getFieldProps('address')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    fullWidth
                    label="Country"
                    placeholder="Country"
                    {...getFieldProps('country')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.country && errors.country)}
                    helperText={touched.country && errors.country}
                  >
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField fullWidth label="State/Region" {...getFieldProps('state')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="City" {...getFieldProps('city')} />
                  <TextField fullWidth label="Zip/Code" {...getFieldProps('zipCode')} />
                </Stack>

              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Save Changes
                </LoadingButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}


