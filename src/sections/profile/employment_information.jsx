import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { employmentAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const EmploymentInfo = () => {
  const {handleCurrentForm} = useGlobalContext()
  const [data, setData] = useState([])
  
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await employmentAPI._readMany()
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
       <ListCard handleCurrentForm={handleCurrentForm} path="employment-info" data={data} title="Employment Info" />
    
    </Container>
  );
};

export default EmploymentInfo;
