import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { Box, Tab, Tabs, Stack, Button, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';

import { getFormFields } from 'src/_mock/formData';

import MHidden from 'src/components/common/MHidden';

import DataConfigView from './data-config';
import SelectDataToShare from './form-view';
import { initialValues } from './iniialValues';

const SelectAllCheck = ({ handleSelectAll, values, field, category, setFieldValue }) => (
  <FormGroup>
    <FormControlLabel
      name={field}
      onChange={(ev) => handleSelectAll(setFieldValue, field, ev.target.checked)}
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
  const [selectAll, setSelectAll] = useState({
    basic: false,
    contact: false,
    empInfo: false,
    eduInfo: false,
    finInfo: false,
    idInfo: false,
    reInfo: false,
    resInfo: false,
  });

  const [selectedFields, setSelectedFields] = useState({
    basic: {},
    contact: {},
    empInfo: {},
    eduInfo: {},
    finInfo: {},
    idInfo: {},
    reInfo: {},
    resInfo: {},
  });
  console.log(selectedFields, "main")
  const fieldData = getFormFields('field-labels');

  useEffect(() => {
    const updatedFields = {};
    Object.keys(fieldData).forEach((key) => {
      updatedFields[key] = fieldData[key].reduce((acc, field) => ({ ...acc, [field.name]: selectAll[key] }), {});
    });
    setSelectedFields(updatedFields);
  }, [selectAll]);

  useEffect(() => {
    console.log(selectedFields);
  }, [selectedFields]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveNext = () => {
    const next = value === 8 ? value : value + 1;
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

  const handleCheckboxChange = (category) => (name) => (event) => {
    setSelectedFields((prevSelectedFields) => ({
      ...prevSelectedFields,
      [category]: { ...prevSelectedFields[category], [name]: event.target.checked },
    }));
  };

  

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
        <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h4">Select data for sharing</Typography>
        <Box direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="outlined" sx={{ mx: 2, flex: 1 }} autoFocus onClick={handleSaveNext}>
            Save & Next
          </Button>
          <Button variant="contained" sx={{ flex: 1 }} autoFocus onClick={handleClose}>
            Share Data
          </Button>
        </Box>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
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
            <DataConfigView />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="basic" name={basic} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='basic' fields={initialValues.basic} handleCheckboxChange={handleCheckboxChange('basic')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="contact" name={contact} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='contact' fields={initialValues.contact} handleCheckboxChange={handleCheckboxChange('contact')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="empInfo" name={empInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='empInfo' fields={initialValues.empInfo} handleCheckboxChange={handleCheckboxChange('empInfo')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="eduInfo" name={eduInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='eduInfo' fields={initialValues.eduInfo} handleCheckboxChange={handleCheckboxChange('eduInfo')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="finInfo" name={finInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='finInfo' fields={initialValues.finInfo} handleCheckboxChange={handleCheckboxChange('finInfo')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={6}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="idInfo" name={idInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='idInfo' fields={initialValues.idInfo} handleCheckboxChange={handleCheckboxChange('idInfo')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={7}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="reInfo" name={reInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='reInfo' fields={initialValues.reInfo} handleCheckboxChange={handleCheckboxChange('reInfo')} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={8}>
            <SelectAllCheck setFieldValue={formik.setFieldValue}  field="resInfo" name={resInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare name='resInfo' fields={initialValues.resInfo} handleCheckboxChange={handleCheckboxChange('resInfo')} />
          </CustomTabPanel>
        </Box>
      </form>
    </Box>
  );
}

ShareView.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
