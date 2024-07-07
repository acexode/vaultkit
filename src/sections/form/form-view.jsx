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

import { profileRequestMapper } from 'src/apis';
import { getSingleProfileUrl, getSingleProfileDataPatchUrl } from 'src/configs/endpoints';

import { UploadSingleFile } from 'src/components/uploads';

import SocialMediaInput from './socialMediaInput';

const MyFormComponent = ({ fields, title, url, tag }) => {
  const {user} = useAuth()
 
  const router = useRouter();
  const [initialValues, setinitialValues] = useState({})
  const validationSchema = {};
  const { predictions, setInput } = useGoogleAutocomplete();
  const location = useLocation();
  const {id} = queryParamsToObject(location.search)
 
  const [autocompleteValues, setAutocompleteValues] = useState({});
  // console.log(predictions);
  
  useEffect(() => {
    const vals = {}
    fields.forEach((field) => {
      vals[field.name] = field.defaultValue || '';
      
      if (['mailing_address', 'emergency_contact_city', 'emergency_contact_address', 'country', 'last_address'].includes(field.name)) {
        validationSchema[field.name] = Yup.string()
          .transform((value, originalValue) => 
             typeof originalValue === 'object' ? originalValue.value : originalValue
          )
          .required(`${field.label} is required`);
      } else if (field.name === "phone_number") {
        validationSchema[field.name] = Yup.string()
          .matches(/^\d+$/, 'Phone number must be digits only')
          .required('Phone number is required');
      } else if (field.name === 'social_media_links' && field.type === 'social_media') {
        vals[field.name] = Object.values(field.defaultValue).join(' ') || '';
        validationSchema[field.name] = Yup.string()
        .transform((value, originalValue) =>
          typeof originalValue === 'object'
            ? Object.values(originalValue).join(' ')
            : originalValue
        )
        .required(`${field.label} is required`);
      } else {
        validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
      }
    });
    setinitialValues(vals)
    const singleUrl = getSingleProfileUrl(tag, id, user.id)
    if(id){
      const getData = async () => {
        const response = await axiosInstance.get(singleUrl)
        console.log(response.data.data)
        setinitialValues(response.data.data)
      }
      getData()
    }
    
  }, [id, tag, user.id])

  const handleProfileDataSubmit = async (values) => {
    const api = profileRequestMapper(tag)
    let response;
    const singleUrl = getSingleProfileDataPatchUrl(tag, id)
    if(tag === 'contact-info'){
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`contact_information[${val}]`, values[val])
      })
      if(id){
        console.log(formData)
       response = await await axiosInstance.patch(singleUrl, formData)
       if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }

    }else if(tag === 'education-info'){
      console.log("my education")
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`education_data[${val}]`, values[val])
      })
      if(id){
        response = await await axiosInstance.patch(singleUrl, formData)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }

    }else if(tag === 'employment-info'){
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(val, values[val])
      })
      if(id){
        response = await await axiosInstance.patch(singleUrl, formData)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }

    }else if(tag === 'personal-info'){
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(val, values[val])
      })
      if(id){
        response = await await axiosInstance.patch(singleUrl, formData)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }

    }else if(tag === 'financial-info'){
      if(id){
        // edit contact
      }
      // create contact
    }else if(tag === 'identification-info'){
      if(id){
        // edit contact
      }
      // create contact
    }else if(tag === 'realestate-info'){
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`real_estate_informations[${val}]`, values[val])
      })
      if(id){
        response = await await axiosInstance.patch(singleUrl, formData)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }
      
    }else if(tag === 'residential-info'){
      const formData = new FormData();
      Object.keys(values).forEach((val) => {
        formData.append(`residential_history[${val}]`, values[val])
      })
      if(id){
        response = await await axiosInstance.patch(singleUrl, formData)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      }else {
        response = await api._create(formData)
      }
    }
    return response
  }
 
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (values) => {
      console.log(values)
      try {
        const response = await handleProfileDataSubmit(values)
        if(response.status === 200){
          router.push("/dashboard/user")
       }
      } catch (error) {
        console.log(error);
      }

      
    },
  });
  console.log(formik)
  const handlePlaceSelected = (event, newValue, name) => {
    console.log('CALLED', newValue);
    setAutocompleteValues((prev) => ({ ...prev, [name]: newValue }));
    console.log(autocompleteValues);
    formik.setFieldValue(name, newValue);
    if (newValue) {
      setInput('');
    }
  };
  const renderField = (field) => {
    switch (field.type) {
      case 'upload':
        return <UploadSingleFile label={field.label} setFieldValue={formik.setFieldValue}  name={field.name} />;
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
            value={autocompleteValues[field.name] || ''}
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
            InputLabelProps={{ shrink: formik.values[field.name] }} 
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
