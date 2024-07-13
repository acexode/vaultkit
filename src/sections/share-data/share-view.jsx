import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';

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

  const fieldData = getFormFields('field-labels');

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
    console.log(category, checked);
    Object.keys(initialValues[category]).forEach((field)=> {

      setFieldValue(`${category}.${field}`, checked)
    })
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
