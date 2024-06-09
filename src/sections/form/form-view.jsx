import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import {  Grid, Card, Stack, Button, MenuItem, TextField, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { UploadSingleFile } from 'src/components/uploads';


const MyFormComponent = ({ fields, title }) => {
  const router = useRouter()
  const initialValues = {};
  const validationSchema = {};

  fields.forEach((field) => {
    initialValues[field.name] = field.defaultValue || '';
    validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const renderField = (field) => {
    switch (field.type) {

      case 'upload':
        return <UploadSingleFile label={field.label} />
      case 'select':
        return (
          <TextField
            key={field.name}
            select
            fullWidth
            id={field.name}
            name={field.name}
            label={field.label}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
            margin='3'
          >
            {field.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      case 'email':
      case 'text':
      default:
        return (
          <TextField
            key={field.name}
            fullWidth
            type={field.type}
            id={field.name}
            name={field.name}
            label={field.label}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
          />
        );
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>

        <Stack alignItems="center" justifyContent="center" sx={{ height: 1, mx: 3 }}>
          <Card
            sx={{
              p: 5,
              // width: 720,
              maxWidth: 720,
            }}
          >
            <Typography variant="h4" mb={2} textAlign="center">{title}</Typography>
            <Grid container spacing={2} mt={2}>
      
            {fields.map((field) => (
              <Grid key={field.name} mb={3} xs={12} md={field.type === 'upload' ? 12 : 5} lg={field.type === 'upload' ? 12 : 5} mx={3}>
              
                {renderField(field)}
              </Grid>
            ))}
            </Grid>
        <Grid item xs={12} justifyContent="center">
          <Button onClick={()=> router.back()} variant="outlined" color="primary" sx={{mr: 2}}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
          </Card>
        </Stack>

      {/* </Grid> */}
    </form>
  );
};

MyFormComponent.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['email', 'text', 'select']).isRequired,
      defaultValue: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default MyFormComponent;