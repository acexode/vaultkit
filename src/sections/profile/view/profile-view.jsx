import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { Stack, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { useGlobalContext } from 'src/context/context';
import { serverBaseUrl, profileEndpoint } from 'src/configs/endpoints';

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

ProfileView.propTypes = {
  handleVerificationModal: PropTypes.func,
};
export default function ProfileView({handleVerificationModal}) {
  const [data, setData] = useState(null);
  const {user} = useAuth()
  const {state} = useGlobalContext()
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(state.redirect);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(state);
    setValue(state.redirect)

  }, [state])

  useEffect(() => {
    const url = `${serverBaseUrl  }/users`;
    
    const path = profileEndpoint(url);
    const fetchData = async () => {
      try {
        // const response = await basicAPI._readMany();
        const response = await axiosInstance.get(path.basic);
        if (response.data) {
          setData(response.data);
          
        } else if (response.error) {
          enqueueSnackbar(response.error.message, {
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'error',
          });
        }
      } catch (error) {
        
        enqueueSnackbar('An error occurred while fetching data.', {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        });
      }
    };
    fetchData();
  }, [enqueueSnackbar, user, user?.id]);

  return (
    <Container maxWidth="xl">
      {/* <Alert
                sx={{mb: 1}}
                severity="primary"
                action={
                  <Button onClick={handleVerificationModal} color="primary" size="small" variant="outlined">
                    Verify Data
                  </Button>
                }
              >
                Your data is not yet verified — start verification!
      </Alert> */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        {data?.first_name && (

        <Typography variant="h4">{data?.first_name}</Typography>
        )}
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          <Tab label="Basic Data" {...a11yProps(0)} />
          <Tab label="Contact Data" {...a11yProps(1)} />
          <Tab label="Employment History" {...a11yProps(2)} />
          <Tab label="Educational Background" {...a11yProps(3)} />
          <Tab label="Financial Data" {...a11yProps(4)} />
          <Tab label="Identification Data" {...a11yProps(5)} />
          <Tab label="Real Estate Data" {...a11yProps(6)} />
          <Tab label="Residential History" {...a11yProps(7)} />
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
    </Container>
  );
}
