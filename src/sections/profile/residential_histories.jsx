import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { residentialHistoryAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const ResidentialHistory = () => {

  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await residentialHistoryAPI._readMany()
    if(response.data) {
      setData(response.data)
    }
    if(response.error){
      enqueueSnackbar(response.error.message, { 
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        variant: "error"
      })
    }
  
   } catch (error) {
    console.log(error)
   }
  }
  fetchData()
 },[enqueueSnackbar])
  

  return (
    <Container>
      <ListCard handleCurrentForm={handleCurrentForm} path="residential-info" data={data} title="Residential Info" />
    </Container>
  );
};

export default ResidentialHistory;
