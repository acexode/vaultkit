/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint } from 'src/configs/endpoints';

import OrgInviteTable from '../tables/org-invites-table';
import OrgSentRequestTableView from '../tables/org-request-table';
import OrgRecievedDataTableView from '../tables/org-received-data-table';

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrganizationSharedTabSection() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState([]);

  const [receivedData, setReceivedData] = useState([]);
  const [sentRequest, setSentRequest] = useState([]);
  
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const approveRequest = async () => {
    try {
      const response = await axiosInstance.patch(requestDataEndpoint.approve);
      if (response.status === 200) {
        enqueueSnackbar('Access Request Approved Successfully', {
          autoHideDuration: 1000,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          variant: 'success',
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('An error occurred while approving the request.', {
        autoHideDuration: 1000,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'error',
      });
    }
  };

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await axiosInstance.get(endpoint);
      if (response?.data && response.status === 200) {
        setter(response.data);
      } else {
        throw new Error(response?.error?.message || 'Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, {
        autoHideDuration: 1000,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    const url = requestDataEndpoint(user.id);
    fetchData(url.recievedData, setReceivedData);

    fetchData(url.recievedDataRequest, setSentRequest);
  }, [user.id]);

  return (
    <Box sx={{ width: '100%' }}>
    
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 450,
          mt: 3
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          sx={{borderBottom: '4px solid #F4F6F8'}}
        >
          <Tab label="Received Data" {...a11yProps(0)} />
          <Tab label="Data Requests" {...a11yProps(1)} />
          <Tab label="Invites" {...a11yProps(2)} />
        </Tabs>

       
        <CustomTabPanel value={value} index={0}>
          <OrgRecievedDataTableView
            recievedData={receivedData}
          
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <OrgSentRequestTableView
            sentrequest={sentRequest}
            approveRequest={approveRequest}
           
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <OrgInviteTable/>
        </CustomTabPanel>
       
        
      </Box>
     
    </Box>
  );
}

// OrganizationSharedTabSection.propTypes = {
//   handleViewDetails: PropTypes.func.isRequired,
// };
