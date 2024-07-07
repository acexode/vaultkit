import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { financialAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const FinancialInfo = () => {
  
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await financialAPI._readMany()
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
    console.log(response)
   } catch (error) {
    console.log(error)
   }
  }
  fetchData()
 },[enqueueSnackbar])
  


  return (
    <Container>
      <ListCard handleCurrentForm={handleCurrentForm} path="financial-info" data={data} title="Financial Info" />
    </Container>
  );
};

export default FinancialInfo;
