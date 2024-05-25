import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Stack, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import { getFormFields } from 'src/_mock/formData';

import DataConfigView from './data-config';
import SelectDataToShare from './form-view';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
const SelectAllCheck = ({handleSelectAll, selectAll, field}) => (
  <FormGroup>
    <FormControlLabel name={field} onChange={(ev) => handleSelectAll(ev, field)}  control={<Checkbox checked={selectAll}  />} label='Select All' />
  </FormGroup>
);
SelectAllCheck.propTypes = {
  handleSelectAll: PropTypes.func,
  selectAll: PropTypes.bool,
  field: PropTypes.string
};
ShareView.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default function ShareView({handleCloseModal}) {
  const [value, setValue] = useState(0);
  const [selectAll, setselectAll] = useState({
    basic: false,
    contact: false,
    empInfo: false,
    eduInfo: false,
    finInfo: false,
    idInfo: false,
    reInfo: false,
    resInfo: false,
  });
  const fieldData = getFormFields('field-labels');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const handleSaveNext = () => {
    const next = value === 8 ? value : value + 1;
    setValue(next);
  };
  const handleClose = (event, newValue) => {
    console.log(newValue);
    handleCloseModal(true)
  };
  const handleSelectAll = (ev, field) => {
    console.log(ev, field);
    const s = {
      ...selectAll,
      [field]: ev.target.checked
    }
    console.log(s);
    setselectAll(s)
  };
  const initialValues = {};

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Stack  direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Select data for sharing</Typography>
        <Box direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="outlined" sx={{ mx: 2 }} autoFocus onClick={handleSaveNext}>
            Save & Next
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Save
          </Button>
        </Box>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}>
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
            <Tab label="Basic Info" {...a11yProps(1)} />
            <Tab label="Contact Info" {...a11yProps(2)} />
            <Tab label="Employment Info" {...a11yProps(3)} />
            <Tab label="Education Info" {...a11yProps(4)} />
            <Tab label="Financial Info" {...a11yProps(5)} />
            <Tab label="Identification Info" {...a11yProps(6)} />
            <Tab label="Real Estate Infos" {...a11yProps(7)} />
            <Tab label="Residential Histories" {...a11yProps(8)} />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
           
            <DataConfigView />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SelectAllCheck field="basic" selectAll={selectAll.basic} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.basic} fields={fieldData.basic} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SelectAllCheck field="contact" selectAll={selectAll.contact} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.contact} fields={fieldData.contact} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <SelectAllCheck field="empInfo" selectAll={selectAll.empInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.empInfo} fields={fieldData.empInfo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <SelectAllCheck field="eduInfo" selectAll={selectAll.eduInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.eduInfo} fields={fieldData.eduInfo} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <SelectAllCheck field="finInfo" selectAll={selectAll.finInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.finInfo} fields={fieldData.finInfo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <SelectAllCheck field="idInfo" selectAll={selectAll.idInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.idInfo} fields={fieldData.idInfo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
          <SelectAllCheck field="reInfo" selectAll={selectAll.reInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.reInfo} fields={fieldData.reInfo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={8}>
          <SelectAllCheck field="resInfo" selectAll={selectAll.resInfo} handleSelectAll={handleSelectAll} />
            <SelectDataToShare selectAll={selectAll.resInfo} fields={fieldData.resInfo} />
          </CustomTabPanel>
        </Box>
      </form>
    </Box>
  );
}
