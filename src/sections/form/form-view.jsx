/* eslint-disable react-hooks/exhaustive-deps */
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import { useLocation } from 'react-router-dom';

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

import useAuth from 'src/hooks/useAuth';
// import useAuth from 'src/hooks/useAuth';
import useGoogleAutocomplete from 'src/hooks/useGoogleAutocomplete';

import axiosInstance from 'src/utils/axios';
import { queryParamsToObject } from 'src/utils/crud-utils';
import { validationFieldMapper, handleProfileDataSubmit } from 'src/utils/formviewutil';

import countries from 'src/_mock/countries';
import { getSingleProfileUrl } from 'src/configs/endpoints';

import { UploadSingleFile } from 'src/components/uploads';

import SocialMediaInput from './socialMediaInput';

const MyFormComponent = ({ fields, title, url, tag }) => {
  const { user } = useAuth();
  
  const router = useRouter();
  const [initialValues, setinitialValues] = useState({});
  const validationSchema = {};
  const { predictions, setInput } = useGoogleAutocomplete();
  const location = useLocation();
  const { id } = queryParamsToObject(location.search);
  console.log(id)
  const [autocompleteValues, setAutocompleteValues] = useState({});

  useEffect(() => {
    const vals = validationFieldMapper(fields, validationSchema, Yup)
    
    setinitialValues(vals);
    const singleUrl = getSingleProfileUrl(tag, id, user?.id);
    if (id) {
      const getData = async () => {
        const response = await axiosInstance.get(singleUrl);

        setinitialValues(response.data.data);
      };
      getData();
    }
  }, [id, tag, user?.id]);

 
  const handleSubmit = (values) => {
    handleProfileDataSubmit(values, tag, id, router)
  }

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (values) => {
      
      try {
        const response = await handleSubmit(values);
        if (response.status === 200) {
          router.push('/dashboard/user');
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handlePlaceSelected = (event, newValue, name) => {
    setAutocompleteValues((prev) => ({ ...prev, [name]: newValue?.value }));
    console.log(name, newValue)
    formik.setFieldValue(name, newValue?.value);
    if (newValue) {
      setInput('');
    }
  };
  const renderField = (field) => {
    console.log(field, formik.values[field.name]);
    switch (field.type) {
      case 'upload':
        return <UploadSingleFile label={field.label} file={formik.values[field.name]} setFieldValue={formik.setFieldValue}  name={field.name} />;
      case 'social_media':
        return (
          <SocialMediaInput
            touched={formik.touched}
            values={formik.values}
            handleChange={formik.handleChange}
            error={formik.errors}
          />
        );
      case 'select':
        return (
          <TextField
            key={Math.random() + field.name}
            select
            fullWidth
            id={field.name}
            name={field.name}
            InputLabelProps={{ shrink: true }}
            label={field.label}
            value={formik.values[field.name] || ""}
            defaultValue={formik.values[field.name]}
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
      case 'country-select':
        return (
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
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
            value={autocompleteValues[field.name] || ''}
            onChange={(evt, val) => handlePlaceSelected(evt, val, field.name)}
            options={
              predictions
                ? predictions.map((prediction) => ({
                    label: prediction.description,
                    value: prediction.description,
                  }))
                : []
            }
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue)
              setInput(newInputValue);

            }}
            renderInput={(params) => (
              <TextField {...params} label={field.label} variant="outlined" />
            )}
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
            InputLabelProps={{ shrink: true }} 
          />
        );
    }
  };
  const fullwidthFields = ['upload', 'textarea', 'social_media'];

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
  tag: PropTypes.string,
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
