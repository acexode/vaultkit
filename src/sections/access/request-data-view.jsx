import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';

// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// import Button from '@mui/material/Button';
import {  Button, Container } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { getFormFields } from 'src/_mock/formData';
import { requestDataEndpoint } from 'src/configs/endpoints';

// import NestedSelect from 'src/components/common/NestedSelect';

import { formatDateToYYYYMMDD } from 'src/utils/format-time';

import CategorySelectCheckmarks from './category-select';

// ----------------------------------------------------------------------

const categories = [
  {
    label: 'Personal Infomation',
    value: "basic_information"
  },
  {
    label: 'Contact Information',
    value: "contact"
  },
  {
    label:  'Education Information',
    value: "education"
  },
  {
    label:  'Financial Information',
    value: "financial"
  },
  {
    label:  'Identification Information',
    value: "identification"
  },
  {
    label:  'Real Estate Information',
    value: "realestate"
  },
  {
    label:  'Residential Information',
    value: "residential"
  }
];
RequestDataView.propTypes = {
  handleClose: PropTypes.func,
};

export default function RequestDataView({ handleClose }) {
  const {user} = useAuth()
  const [selectedCategory, setselectedCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    start_time: Yup.date().required("Start time is required"),
    end_time: Yup.date().required("End time is required"),
    title: Yup.string().required('Title is required')
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      end_time: '',
      start_time: '',
      title: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      const resource = selectedCategory.map(category => ({type: category}))

      const data = {
        access_request: {
          title: values.title,
          sharer_email: values.email,
          receiver_type: "user",
          sharer_type: "user",
          start_time: values.start_time,
          end_time: values.end_time,
          resource,
          receiver_id: user?.id,
        },
      };
     
    
      try {
        setLoading(true)
        const url = requestDataEndpoint(user.id)
        const response = await axiosInstance.post(url.request, data);
        if(response.status === 200){
          enqueueSnackbar(response.data.success, {
            variant: 'success',
          });
          handleClose('request-data-view')
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        if(error.response && error.response.status === 422){
          enqueueSnackbar(error.response.data.error, {
            variant: 'error',
          });
        }else {
          console.error('An unexpected error occurred:', error);
        }
      }
      console.log(selectedCategory);
    },
  });


  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const fieldData = getFormFields('field-labels', user.id);

  console.log(fieldData);

  const renderForm = (
    <form style={{width: "100%"}} onSubmit={formik.handleSubmit}>
      <Stack spacing={2} sx={{ width: '100%' }} >

       <TextField
          sx={{ mt: 0 }}
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          InputLabelProps={{ shrink: true }}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        {/* <NestedSelect /> */}
        <CategorySelectCheckmarks
          handleSelected={setselectedCategory}
          list={categories}
          title="Category of data"
        />
        
        <TextField
          sx={{ mt: 0 }}
          name="email"
          label="Enter Recipient Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ mt: 0 }}
          name="start_time"
          label="Start time"
          type='date'
          min="2024-08-20"
          InputLabelProps={{ shrink: true, }}
          inputProps={{ min: formatDateToYYYYMMDD(new Date())  }}
          value={formik.values.start_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.start_time && Boolean(formik.errors.start_time)}
          helperText={formik.touched.start_time && formik.errors.start_time}
        />
        <TextField
          sx={{ mt: 0 }}
          name="end_time"
          label="End time"
          type="date"
          InputLabelProps={{ shrink: true }}
          inputProps={{ min: formatDateToYYYYMMDD(new Date())  }}
          value={formik.values.end_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.end_time && Boolean(formik.errors.end_time)}
          helperText={formik.touched.end_time && formik.errors.end_time}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }} width="50%" mx="auto">
        <Button
          onClick={() => handleClose('request-data-view')}
          variant="outlined"
          fullWidth
          color="inherit"
          size="large"
          sx={{ marginRight: '10px' }}
        >
          Cancel
        </Button>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={loading}
        >
          Request Data
        </LoadingButton>
      </Stack>
    </form>
  );

  return (
    <Container sx={{ p: 0 }}>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Request Data
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
          Select the category of data you need and select specific fields
        </Typography>

        {renderForm}
      </Stack>
    </Container>
  );
}
