import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import { educationAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const EducationInfo = () => {
  
  const { handleCurrentForm } = useGlobalContext();
  const [educationData, seteducationData] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  
useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await educationAPI._readMany()
    if(response.data) {
      seteducationData(response.data)
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
      <ListCard handleCurrentForm={handleCurrentForm} path="education-info" data={educationData} title="Education Info" />
    </Container>
  );
};

export default EducationInfo;
