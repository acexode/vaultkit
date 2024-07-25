import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint } from 'src/configs/endpoints';

// import { Stack, Button } from '@mui/material';
import TableToolbar from 'src/sections/table/user-table-toolbar';

import SharedTableView from './shared-table';
import RequestTableView from './request-table';




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
          <Box>
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
SharedTabSection.propTypes = {
  handleViewDetails: PropTypes.func,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function SharedTabSection({handleViewDetails}) {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState('');
  // const [page, setPage] = useState(0);
  const {user} = useAuth()
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleFilterByName = (event) => {
    // setPage(0);
    setFilterName(event.target.value);
  };

  const [requestData, setRequestData] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const approveRequest = async () => {
    try {
      const response = await axiosInstance.patch(requestDataEndpoint.approve)
      if(response.status === 200){
        enqueueSnackbar("Access Request Approved Successfully", {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'success',
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const url = requestDataEndpoint(user.id)
        const response = await axiosInstance.get(url.request)
        console.log(response)
        if (response.data && response.status === 200) {
          setRequestData(response.data);
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
        console.log(error);
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
    fetchRequestData();
  }, [enqueueSnackbar, setRequestData, user.id]);


  return (
    <Box sx={{ width: '100%' }}>
      <TableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', height: 450 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          <Tab label="Data Requests" {...a11yProps(0)} />
          <Tab label="Shared Data" {...a11yProps(1)} />
          <Tab label="Saved Categories" {...a11yProps(2)} />

        </Tabs>

        <CustomTabPanel value={value} index={0}>
            <RequestTableView requestData={requestData} approveRequest={approveRequest} filterName={filterName} selected={selected} setSelected={setSelected} handleViewDetails={handleViewDetails} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <SharedTableView filterName={filterName} selected={selected} setSelected={setSelected} handleViewDetails={handleViewDetails} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <SharedTableView filterName={filterName} selected={selected} setSelected={setSelected} handleViewDetails={handleViewDetails} />
        </CustomTabPanel>

       
      </Box>

    </Box>
  );
}



