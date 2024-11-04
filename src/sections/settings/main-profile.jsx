import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useState, useEffect, useCallback } from 'react';
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
  FormControlLabel,
} from '@mui/material';

import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

// import axiosInstance from 'src/utils/axios';

import axiosInstance from 'src/utils/axios';

import { profileAPIs } from 'src/apis';
import countries from 'src/_mock/countries';
import UploadAvatar from 'src/layouts/dashboard/common/UploadAvatar';
import { getSingleProfileDataPatchUrl } from 'src/configs/endpoints';

// hooks
// import useAuth from '../../../../hooks/useAuth';
// utils

// ----------------------------------------------------------------------

export default function MainProfileView() {
  const isMountedRef = useIsMountedRef();
  const { user, getBasicInfo } = useAuth();
  const [basicInfo, setBasicInfo] = useState();
  console.log(basicInfo, 'basicInfo');
  const [contactInfo, setContactInfo] = useState();
  const [loading, setLoading] = useState(false);
  const basicUrl = getSingleProfileDataPatchUrl('personal-info', user.id);
  const contactUrl = getSingleProfileDataPatchUrl('contact-info', user.id);

  const createFormData = (data, prefix) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(prefix ? `${prefix}[${key}]` : key, data[key]);
    });
    return formData;
  };

  const UpdateUserSchema = Yup.object().shape({
    first_name: Yup.string().required('Name is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: basicInfo?.first_name || '',
      last_name: basicInfo?.last_name || '',
      email: user?.email,
      profile_picture_url: basicInfo?.profile_picture_url?.url,
      phone_number: basicInfo?.phone_number,
      nationality: basicInfo?.nationality,
      home_address: contactInfo?.home_address,
      province: contactInfo?.province,
      city: contactInfo?.city,
      postal_code: contactInfo?.postal_code,
      // is_private: basicInfo?.is_private
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      const basicInfoData = {
        first_name: values.first_name,
        last_name: values.last_name,
        profile_picture_url: values.profile_picture_url,
        phone_number: values.phone_number,
        nationality: values.nationality,
      };
      const basicData = createFormData(basicInfoData, 'basic_information');
      const contactInfoData = {
        home_address: values.home_address,
        province: values.province,
        city: values.city,
        postal_code: values.postal_code,
      };
      const contactData = createFormData(contactInfoData, 'contact_information');

      try {
        setLoading(true);

        const updateBasicInfo = axiosInstance.patch(basicUrl, basicData);
        const updateContactInfo = axiosInstance.patch(contactUrl, contactData);

        const [basicInfoResponse, contactInfoResponse] = await Promise.all([
          updateBasicInfo,
          updateContactInfo,
        ]);
        if (basicInfoResponse?.status === 200 && contactInfoResponse?.status === 200) {
          enqueueSnackbar('Update successful', { variant: 'success' });
        } else {
          enqueueSnackbar('Unable to update profile', { variant: 'error' });
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      } finally {
        setLoading(false);
        if (isMountedRef.current) setSubmitting(false);
      }
    },
  });

  const { values, errors, touched, handleSubmit, getFieldProps, isSubmitting, setFieldValue } =
    formik;

  useEffect(() => {
    const fetchContact = async () => {
      const api = profileAPIs(user?.id);
      const response = await api.contactAPI._readMany();

      if (response.data) {
        setContactInfo(response.data);
      }
    };
    if (user) {
      setBasicInfo(user?.basic);
    }
    if (!user.basic) {
      getBasicInfo();
    }
    fetchContact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('profile_picture_url', {
          ...file,
          preview: URL.createObjectURL(file),
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
                file={values.profile_picture_url}
                maxSize={3145728}
                onDrop={handleDrop}
                error={Boolean(touched.profile_picture_url && errors.profile_picture_url)}
                caption={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                  </Typography>
                }
              />

              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {touched.profile_picture_url && errors.profile_picture_url}
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
                  <TextField
                    fullWidth
                    label="First Name"
                    {...getFieldProps('first_name')}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    {...getFieldProps('last_name')}
                    InputLabelProps={{ shrink: true }}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    disabled
                    label="Email Address"
                    {...getFieldProps('email')}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    {...getFieldProps('phone_number')}
                    InputLabelProps={{ shrink: true }}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Address"
                    {...getFieldProps('home_address')}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    select
                    fullWidth
                    label="Nationality"
                    placeholder="nationality"
                    {...getFieldProps('nationality')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.nationality && errors.nationality)}
                    helperText={touched.nationality && errors.nationality}
                    InputLabelProps={{ shrink: true }}
                  >
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="State/Region"
                    {...getFieldProps('province')}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    label="City"
                    {...getFieldProps('city')}
                    InputLabelProps={{ shrink: true }}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Zip/Code"
                    {...getFieldProps('postal_code')}
                    InputLabelProps={{ shrink: true }}
                  />
                </Stack>
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={loading || isSubmitting}>
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
