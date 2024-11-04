import * as Yup from 'yup';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { LoadingButton } from '@mui/lab';
import { Box, styled, Button, Dialog, TextField, DialogTitle, DialogContent, DialogActions, TextareaAutosize } from '@mui/material';

import axiosInstance from 'src/utils/axios';

import { baseEndpoints } from 'src/configs/endpoints';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    paddingTop: '5px',
  },
  '& .MuiDialogActions-root': {
    padding: '5px',
  },
}));

// Define Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  comment: Yup.string().min(10, 'Comment should be at least 10 characters').required('Comment is required'),
});

AddNotes.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  data: PropTypes.object,
};

export default function AddNotes({ open, setOpen, data }) {
  const [loading, setloading] = React.useState(false)

  console.log(data);
  const handleClose = () => {
    setOpen(false);
  };

  // Initialize Formik with initial values, validation schema, and submit handler
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: data?.title || '', // Pre-fill name if available in data
      comment: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setloading(true)
      const payload = {
        note:{
          ...values,
          access_request_id: data.id
        }
      }
      try {
        const endpoint = `${baseEndpoints.profile}/notes`;
        const res = await axiosInstance.post(endpoint, payload)
        setloading(false)
        console.log(res);
      } catch (error) {
        setloading(false)
      }

      // setOpen(false); // Close the dialog after submission
    },
  });

  return (
    <BootstrapDialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle textAlign="center" id="alert-dialog-title">
        Add Note
      </DialogTitle>
      <DialogContent
        sx={{ padding: '10px', margin: '10px', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            disabled
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="Enter Comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: '100%',
              padding: '16.5px 14px',
              fontSize: '1rem',
              borderRadius: 4,
              border: '1px solid rgba(0, 0, 0, 0.23)',
              outline: 'none',
              resize: 'vertical',
            }}
          />
          {formik.touched.comment && formik.errors.comment && (
            <Box sx={{ color: 'error.main', fontSize: '0.875rem', marginTop: '-8px' }}>
              {formik.errors.comment}
            </Box>
          )}
        </Box>
        <DialogActions sx={{ marginTop: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton loading={loading} type="submit" variant="contained" onClick={formik.handleSubmit}>
            Submit
          </LoadingButton>
        </DialogActions>
      </DialogContent>
    </BootstrapDialog>
  );
}
