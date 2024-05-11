import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import { getFormFields } from 'src/_mock/formData';

import SelectDataToShare from './form-view';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{flex: 1}}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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

export default function ShareView() {
  const [value, setValue] = useState(0);
  const fieldData = getFormFields('field-labels')

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const handleSaveNext = () => {
    const next = value === 7 ? value : value + 1
    setValue(next);
  };
  const handleClose = (event, newValue) => {
    console.log(newValue);
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
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Select data for sharing</Typography>
        <Box direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="outlined" sx={{mx: 2}} autoFocus onClick={handleSaveNext}>
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
          <Tab label="Basic Info" {...a11yProps(0)} />
          <Tab label="Contact Info" {...a11yProps(1)} />
          <Tab label="Employment Info" {...a11yProps(2)} />
          <Tab label="Education Info" {...a11yProps(3)} />
          <Tab label="Financial Info" {...a11yProps(4)} />
          <Tab label="Identification Info" {...a11yProps(5)} />
          <Tab label="Real Estate Infos" {...a11yProps(6)} />
          <Tab label="Residential Histories" {...a11yProps(7)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <SelectDataToShare fields={fieldData.basic} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <SelectDataToShare fields={fieldData.contact} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <SelectDataToShare fields={fieldData.empInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        <SelectDataToShare fields={fieldData.eduInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
        <SelectDataToShare fields={fieldData.finInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
        <SelectDataToShare fields={fieldData.idInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
        <SelectDataToShare fields={fieldData.reInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
        <SelectDataToShare fields={fieldData.resInfo} />
        </CustomTabPanel>
      </Box>
      </form>
    </Box>
  );
}
