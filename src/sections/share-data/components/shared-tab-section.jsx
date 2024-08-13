/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint } from 'src/configs/endpoints';

import TableToolbar from 'src/sections/table/user-table-toolbar';

import SentRequestTableView from '../tables/request-table';
import SharedDataTableView from '../tables/shared-data-table';
import RecievedDataTableView from '../tables/recieved-data-table';
import RecievedRequestTableView from '../tables/recieved-request-table';

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

export default function SharedTabSection() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [sharedData, setSharedData] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedRequest, setReceivedRequest] = useState([]);
  const [sentRequest, setSentRequest] = useState([]);
  
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
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
    fetchData(url.sharedData, setSharedData);
    fetchData(url.sentDataRequest, setReceivedRequest);
    fetchData(url.recievedDataRequest, setSentRequest);
  }, [user.id]);

  return (
    <Box sx={{ width: '100%' }}>
      <TableToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 450,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          <Tab label="Shared Data" {...a11yProps(0)} />
          <Tab label="Received Data" {...a11yProps(1)} />
          <Tab label="Sent Data Requests" {...a11yProps(2)} />
          <Tab label="Received Data Request" {...a11yProps(3)} />
          <Tab label="Saved Categories" {...a11yProps(4)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <SharedDataTableView
            sharedData={sharedData}
            approveRequest={approveRequest}
            filterName={filterName}
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RecievedDataTableView
            recievedData={receivedData}
            filterName={filterName}
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SentRequestTableView
            sentrequest={sentRequest}
            approveRequest={approveRequest}
            filterName={filterName}
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <RecievedRequestTableView
            recievedRequest={receivedRequest}
            approveRequest={approveRequest}
            filterName={filterName}
            selected={selected}
            setSelected={setSelected}
            
          />
        </CustomTabPanel>
      </Box>
     
    </Box>
  );
}

// SharedTabSection.propTypes = {
//   handleViewDetails: PropTypes.func.isRequired,
// };
