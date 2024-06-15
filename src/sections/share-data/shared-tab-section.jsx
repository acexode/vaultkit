import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

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

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleFilterByName = (event) => {
    // setPage(0);
    setFilterName(event.target.value);
  };


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
            <RequestTableView filterName={filterName} selected={selected} setSelected={setSelected} handleViewDetails={handleViewDetails} />
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



