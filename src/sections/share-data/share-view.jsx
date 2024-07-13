import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { Box, Tab, Tabs, Stack, Button, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { getFormFields } from 'src/_mock/formData';
import { requestDataEndpoint } from 'src/configs/endpoints';

import MHidden from 'src/components/common/MHidden';

import DataConfigView from './data-config';
import SelectDataToShare from './form-view';
import { initialValues } from './iniialValues';

const SelectAllCheck = ({ handleSelectAll, values, field, category, setFieldValue }) => (
  <FormGroup>
    <FormControlLabel
      name={field}
      onChange={(ev) => handleSelectAll(setFieldValue, category, ev.target.checked)}
      control={<Checkbox checked={values[category][field]} />}
      label="Select All"
    />
  </FormGroup>
);

SelectAllCheck.propTypes = {
  handleSelectAll: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ flex: 1 }}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function ShareView({ handleCloseModal }) {
  const [value, setValue] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const {user} = useAuth()
  const fieldData = getFormFields('field-labels');
  const typeMapping = {
    basic: 'personal',
    contact: 'contact',
    eduInfo: 'education',
    empInfo: 'employment',
    finInfo: 'financial',
    idInfo: 'identity',
    reInfo: 'residencial',
    resInfo: 'realestate'
  };
 
  // useEffect(() => {
  //   const updatedFields = {};
  //   Object.keys(fieldData).forEach((key) => {
  //     updatedFields[key] = fieldData[key].reduce((acc, field) => ({ ...acc, [field.name]: selectAll[key] }), {});
  //   });
  //   setSelectedFields(updatedFields);
  // }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveNext = () => {
    const next = value === 8 ? 0 : value + 1;
    setValue(next);
  };

  const handleClose = () => {
    handleCloseModal('share-data-view');
  };
 
  const handleSelectAll = (setFieldValue, category, checked) => {
    Object.keys(initialValues[category]).forEach((field)=> {

      setFieldValue(`${category}.${field}`, checked)
    })
  };

  // const handleCheckboxChange = (category) => (name) => (event) => {
    
  // };


  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const result = Object.keys(formik.values).reduce((acc, key) => {
        if (typeMapping[key]) {
            const sharedData = Object.keys(formik.values[key]).filter(subKey => formik.values[key][subKey] === true);
            if (sharedData.length > 0) {
                acc.push({ type: typeMapping[key], shared_data: sharedData });
            }
        }
        return acc;
      }, []);
      const data = {
        access_request: {
          title: values.title,
          receiver_email: values.receiver_email,
          receiver_type: "user",
          sharer_type: "user",
          start_time: values.start_time,
          end_time: values.end_time,
          resource: result,
          sharer_id: user?.id
        }
      }
      try {
        const response = await axiosInstance.post(requestDataEndpoint.share, data)
        if(response.status === 200){
          enqueueSnackbar(response.data.success, {
            variant: 'success',
          });
        } 
        handleClose('share-data-view')
      } catch (error) {
        if(error.response.status === 422){
          enqueueSnackbar(error.response.data.error, {
            variant: 'error',
          });
        }
      }
    },
  });




  return (
    <Box sx={{ width: '100%' }}>
      
      <form onSubmit={formik.handleSubmit}>
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5} marginTop={2}>
        <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h4">Select data for sharing</Typography>
        <Box direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="outlined" sx={{ mx: 2, flex: 1 }} autoFocus onClick={handleSaveNext}>
            {value === 8 ? "Previous" : "Save & Next"}
          </Button>
          <Button variant="contained" sx={{ flex: 1 }} type='submit' autoFocus>
            Share Data
          </Button>
        </Box>
      </Stack>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}>
          <MHidden width="smDown">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              orientation="vertical"
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Data Settings" {...a11yProps(0)} />
              <Tab label="Personal Information" {...a11yProps(1)} />
              <Tab label="Contact" {...a11yProps(2)} />
              <Tab label="Employment" {...a11yProps(3)} />
              <Tab label="Education" {...a11yProps(4)} />
              <Tab label="Financial" {...a11yProps(5)} />
              <Tab label="Identification" {...a11yProps(6)} />
              <Tab label="Real Estate" {...a11yProps(7)} />
              <Tab label="Residential Histories" {...a11yProps(8)} />
            </Tabs>
          </MHidden>

          <CustomTabPanel value={value} index={0}>
            <DataConfigView values={formik.values} setFieldValue={formik.setFieldValue} formik={formik} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue} category="basic"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='basic' fields={initialValues.basic} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="contact"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='contact' fields={initialValues.contact} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="empInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='empInfo' fields={initialValues.empInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="eduInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='eduInfo' fields={initialValues.eduInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="finInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='finInfo' fields={initialValues.finInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={6}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="idInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='idInfo' fields={initialValues.idInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={7}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="reInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='reInfo' fields={initialValues.reInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={8}>
            <SelectAllCheck field='all' values={formik.values} setFieldValue={formik.setFieldValue}  category="resInfo"  handleSelectAll={handleSelectAll} />
            <SelectDataToShare fieldData={fieldData} values={formik.values} name='resInfo' fields={initialValues.resInfo} setFieldValue={formik.setFieldValue} />
          </CustomTabPanel>
        </Box>
      </form>
    </Box>
  );
}

ShareView.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
