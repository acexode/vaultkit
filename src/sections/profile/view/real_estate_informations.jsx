import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import { profileAPIs } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from '../components/ListCard';

const RealEstateInfo = () => {
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  
  const { enqueueSnackbar } = useSnackbar();
  const {user} = useAuth()
useEffect(() => {
  const fetchData = async () => {
   try {
    const api = profileAPIs(user?.id)
    const response = await api.realEstateAPI._readMany()
    
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
 },[enqueueSnackbar, user?.id])
  

  return (
    <Container>
      <ListCard handleCurrentForm={handleCurrentForm} path="realestate-info" data={data} redirect={6} title="Real Estate Info" />
    </Container>
  );
};

export default RealEstateInfo;
