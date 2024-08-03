import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import { profileAPIs } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import ListCard from '../components/ListCard';

const EducationInfo = () => {
  
  const { handleCurrentForm } = useGlobalContext();
  const [educationData, seteducationData] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const {user} = useAuth()
useEffect(() => {
  const fetchData = async () => {
   try {
    const api = profileAPIs(user?.id)
    const response = await api.educationAPI._readMany()
    
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
 },[enqueueSnackbar, user?.id])
  return (
    <Container>
      <ListCard handleCurrentForm={handleCurrentForm} path="education-info" redirect={3} data={educationData} title="Education Info" />
    </Container>
  );
};

export default EducationInfo;
