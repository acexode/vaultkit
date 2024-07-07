import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { identityAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';


const IdentificationInfo = () => {
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await identityAPI._readMany()
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
    <ListCard handleCurrentForm={handleCurrentForm} path="identification-info" data={data} title="Identification Info" />
  </Container>
  );
};

export default IdentificationInfo;
