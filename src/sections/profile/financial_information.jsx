import React from 'react';

import { Container } from '@mui/material';

import { useGlobalContext } from 'src/context/context';

import ListCard from './ListCard';

const FinancialInfo = () => {

  const {handleCurrentForm} = useGlobalContext()
  const data = [{
    home_address: 'Kubwa FCT',
    phone_number: '07069598686',
    emergency_contact_name: 'Wife',
    emergency_contact_phone: '08033737737',
    emergency_contact_email: 'wife@gmail.com',
    emergency_contact_address: 'Kubwa FCT Abuja',
    emergency_contact_relationship: 'Wfie',
    city: 'Abuja',
    province: 'Kubwa',
    postal_code: '901101',
    // emergency_contact_city: '',
    // emergency_contact_province: '',
    // Emergency_contact_postal_code: '',
  }];


  return (
    <Container>
      <ListCard handleCurrentForm={handleCurrentForm} path="financial-info" data={data} title="Financial Info" />
    </Container>
  );
};

export default FinancialInfo;
