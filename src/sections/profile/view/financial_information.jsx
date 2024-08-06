import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import { profileAPIs } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import FinanceCard from '../components/FinanceCard';

const FinancialInfo = () => {
  
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const {user} = useAuth()
useEffect(() => {
  const fetchData = async () => {
   try {
    const api = profileAPIs(user?.id)
    const response = await api.financialAPI._readMany()
 
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
 },[enqueueSnackbar, user?.id])
  


  return (
    <Container>
      <FinanceCard handleCurrentForm={handleCurrentForm} path="financial-info" redirect={4} data={data} title="Financial Info" />
    </Container>
  );
};

export default FinancialInfo;
