import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { realEstateAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const RealEstateInfo = () => {
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await realEstateAPI._readMany()
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
      <ListCard handleCurrentForm={handleCurrentForm} path="realestate-info" data={data} title="Real Estate Info" />
    </Container>
  );
};

export default RealEstateInfo;
