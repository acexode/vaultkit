import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import BasicInfo from './basic-info';
import ContactInfo from './contact-info';
import EducationInfo from './education_information';
import FinancialInfo from './financial_information';
import EmploymentInfo from './employment_information';
import RealEstateInfo from './real_estate_informations';
import ResidentialHistory from './residential_histories';
import IdentificationInfo from './identification_information';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileView() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Sir Abubakar</Typography>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
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
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BasicInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContactInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EmploymentInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <EducationInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <FinancialInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <IdentificationInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <RealEstateInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <ResidentialHistory />
      </CustomTabPanel>
    </Box>
  );
}
