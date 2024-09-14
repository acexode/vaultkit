import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { LoadingButton } from '@mui/lab';
import { Stack, Button, styled, Container, Typography } from '@mui/material';

import axiosInstance from 'src/utils/axios';

import { baseEndpoints } from 'src/configs/endpoints';

import { UploadSingleFile } from 'src/components/uploads';

import { BulkInvite } from 'src/sections/profile/view/constant';

const IconWrapper = styled('div')(({ theme }) => ({
  background: '#ffebda',
  width: '65px',
  height: '65px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px',
}));

const TemplateWrapper = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center',
}));

// Yup validation schema for file upload
const validationSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('A file is required')
    .test(
      'fileType',
      'Only CSV files are accepted',
      (value) => value && value.type === 'text/csv'
    )
});

const BulkInviteModal = ({ handleCloseModal, user }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    file: null
  };

  const handleSendInvite = async (values) => {
    console.log('Form Submitted with values:', values);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', values.file);
  

      const res = await axiosInstance.post(
        `${baseEndpoints.organization}/${user.id}/upload_employees`,
        formData
      );
      console.log(res);
      enqueueSnackbar(res.data.message, {
        variant: 'success',
      });
      setLoading(false);
      handleCloseModal(BulkInvite)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container sx={{ width: '100%', marginTop: '15px' }}>
      <IconWrapper>
        <Icon fontSize={24} icon="mingcute:invite-line" />
      </IconWrapper>
      <Typography textAlign="center" variant="h4">
        Upload Employee
      </Typography>
      <TemplateWrapper href="/assets/csv_file.csv" download>
        Download sample template
      </TemplateWrapper>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSendInvite}
      >
        {({ setFieldValue, values, errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction="column" justifyContent="center" spacing={3} my={3}>
              <UploadSingleFile
                label="CSV file"
                error={touched.file && Boolean(errors.file)}
                helperText={touched.file && errors.file ? errors.file : 'Upload a CSV file'}
                setFieldValue={setFieldValue}
                file={values.file}
                name="file"
              />

              <LoadingButton
                type="submit"
                size="small"
                variant="outlined"
                sx={{ height: '60px' }}
                loading={loading}
              >
                Send Invites
              </LoadingButton>
              <Button
                size="small"
                variant="contained"
                sx={{ height: '60px' }}
                onClick={() => handleCloseModal(BulkInvite)}
              >
                Cancel
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

BulkInviteModal.propTypes = {
  handleCloseModal: PropTypes.func,
  user: PropTypes.object,
};

export default BulkInviteModal;
