import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import {
  Grid,
  Card,
  Stack,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
  Autocomplete,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import useGoogleAutocomplete from 'src/hooks/useGoogleAutocomplete';

import axiosInstance from 'src/utils/axios';

import { UploadSingleFile } from 'src/components/uploads';

import SocialMediaInput from './socialMediaInput';

const MyFormComponent = ({ fields, title, url }) => {
  const router = useRouter();
  const initialValues = {};
  const validationSchema = {};
  const { predictions, setInput } = useGoogleAutocomplete();
  const [value, setValue] = useState(null);
  console.log(predictions);
  fields.forEach((field) => {
    initialValues[field.name] = field.defaultValue || '';
    validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
    // if (field.name === 'phone_number') {
    //   validationSchema[field.name] = Yup.string()
    //     .matches(/^\d+$/, 'Phone number must be digits only')
    //     .required('Phone number is required');
    // } else if(field.name === 'first_name') {
    //   validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
    // }else if(field.name === 'last_name'){
    //   validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
    // }else {
    //   validationSchema[field.name] = Yup.string();
    // }
  });
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      const hasUploads = fields.filter((f) => f.type === 'uploads');
      const isEdit = true;
      try {
        if (isEdit) {
          if (hasUploads.length > 0) {
            console.log('form data');
            // create form fields
            axiosInstance.post(url, values);
          } else {
            console.log('object');
            axiosInstance.post(url, values);
          }
        } else {
          console.log('new post');
          if (hasUploads.length > 0) {
            console.log('form fields');
            // create form fields
            axiosInstance.put(url, values);
          } else {
            console.log('object');
            axiosInstance.put(url, values);
          }
        }
        console.log(values);
      } catch (error) {
        console.log(error);
      }

      // Handle form submission
    },
  });

  const handlePlaceSelected = (event, newValue, name) => {
    console.log('CALLED', newValue);
    setValue(newValue);
    formik.setFieldValue(name, newValue);
    if (newValue) {
      setInput('');
    }
  };
  console.log(fields);
  const renderField = (field) => {
    switch (field.type) {
      case 'upload':
        return <UploadSingleFile label={field.label} />;
      case 'social_media':
        return <SocialMediaInput touched={formik.touched} values={formik.values} handleChange={formik.handleChange} error={formik.errors} />;
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
            margin="3"
          >
            {field.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      case 'multiselect':
        return (
          <Autocomplete
            multiple
            id="tags-outlined"
            options={field.options}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Benefit packages" fullWidth />
            )}
          />
        );

      case 'date':
        return (
          <TextField
            key={field.name}
            fullWidth
            InputLabelProps={{ shrink: true }}
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
      case 'textarea':
        return (
          <TextField
            key={field.name}
            fullWidth
            multiline
            minRows={3}
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
      case 'autocomplete':
        return (
          <Autocomplete
            freeSolo
            key={field.name}
            fullWidth
            name={field.name}
            label={field.label}
            id={field.name}
            value={value}
            onChange={(evt, val) => handlePlaceSelected(evt, val, field.name)}
            options={predictions.map((prediction) => ({
              label: prediction.description,
              value: prediction.description,
            }))}
            onInputChange={(event, newInputValue) => {
              setInput(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} label={field.label} variant="outlined" />}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
          />
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
  const fullwidthFields = ['upload', 'textarea'];

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1, mx: 3 }}>
        <Card
          sx={{
            p: 3,
            // width: 720,
            maxWidth: 720,
          }}
        >
          <Typography variant="h4" mb={2} textAlign="center">
            {title}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {fields.map((field) => (
              <>
                {field.isForm ? (
                  <Grid
                    key={field.name}
                    mb={3}
                    xs={12}
                    md={fullwidthFields.includes(field.type) ? 12 : 5}
                    lg={fullwidthFields.includes(field.type) ? 12 : 5}
                    mx={3}
                  >
                    {renderField(field)}
                  </Grid>
                ) : (
                  <Grid md={12} mb={3} mx={3}>
                    <Divider />
                    <Typography mt={2} variant="p" component="h5">
                      {field.label}
                    </Typography>
                  </Grid>
                )}
              </>
            ))}
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Button onClick={() => router.back()} variant="outlined" color="primary" sx={{ mr: 2 }}>
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
  url: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        'email',
        'text',
        'select',
        'multiselect',
        'date',
        'textarea',
        'upload',
        'autocomplete',
      ]).isRequired,
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
