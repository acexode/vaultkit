import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Form, Field, Formik } from 'formik';

import { LoadingButton } from '@mui/lab';
import { Stack, Button, styled, TextField, Container, Typography } from '@mui/material';

import axiosInstance from 'src/utils/axios';

import { baseEndpoints } from 'src/configs/endpoints';

import { SingleInvite } from 'src/sections/profile/view/constant';

// Yup validation schema for form
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

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

const SingleInviteModal = ({ handleCloseModal, user }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: '',
  };
  console.log(user);
  const handleSendInvite = async (values) => {
    console.log('Form Submitted', values);
  
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        `${baseEndpoints.organization}/${user.id}/invite_employee`,
        values
      );
      console.log(res);
      enqueueSnackbar(res.data.Message, {
        variant: 'success',
      });
      setLoading(false);
      handleCloseModal(SingleInvite)
    } catch (error) {
      enqueueSnackbar('Unable to send invite', {
        variant: 'error',
      });
      console.log(error);
      setLoading(false);
    }

    // You can use setSubmitted(true) or any state management after submission if needed
  };

  return (
    <Container sx={{ width: '380px', marginTop: '15px' }}>
      <IconWrapper>
        <Icon fontSize={24} icon="mingcute:invite-line" />
      </IconWrapper>
      <Typography textAlign="center" variant="h4">
        Invite an employee
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSendInvite}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction="column" justifyContent="center" spacing={3} my={3}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={
                  touched.email && errors.email
                    ? errors.email
                    : 'Enter email of the employee or user you want to invite'
                }
              />

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="outlined"
                loading={loading}
              >
                 Send Invite
              </LoadingButton>
              <Button
                size="small"
                variant="contained"
                sx={{ height: '60px' }}
                onClick={() =>handleCloseModal(SingleInvite)}
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

SingleInviteModal.propTypes = {
  handleCloseModal: PropTypes.func,
  user: PropTypes.object,
};

export default SingleInviteModal;
