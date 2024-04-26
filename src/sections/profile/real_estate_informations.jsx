import React from 'react';
// import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, ListItemText } from '@mui/material';

import { useGlobalContext } from 'src/context/context';

const ListItemRoot = styled('div')(({ theme }) => ({
  display: 'block',
  borderRadius: '8px',
  alignItems: 'center',
  marginBottom: ' 12px',
  padding: '12px 16px',
  outlineOffset: '-1px',
  outline: 'rgb(242, 242, 242) solid 1px',
  wordBreak: 'break-word',
  backgroundColor: 'rgb(250, 250, 250)',
}));
const Item = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  gap: '24px',
  width: '100%',
  textAlign: 'left',
  boxSizing: 'border-box',
}));
const RealEstateInfo = () => {
  const {handleCurrentForm} = useGlobalContext()
  const data = {
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
  };

  function convertToSentenceCase(str) {
    // Replace underscores with spaces
    str = str.replace(/_/g, ' ');

    // Convert to sentence case
    console.log(
      str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase())
    );
    return str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase());
  }
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 2,
            width: 1,
            maxWidth: 520,
          }}
        >
          <Stack>
            <Box sx={{ mb: 3 }}>
              <Item>
                <ListItemText sx={{ minWidth: '84px' }}>Real Estate Info</ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Button variant="outlined" onClick={() => handleCurrentForm('realestate-info')}>Edit Info</Button>
                </ListItemText>
              </Item>
            </Box>
            {Object.keys(data).map((e) => (
              <ListItemRoot>
                <Item>
                  <ListItemText sx={{ minWidth: '84px' }}>{convertToSentenceCase(e)}</ListItemText>
                  <ListItemText sx={{ textAlign: 'right' }}>
                    <Typography sx={{ fontWeight: '700' }}>{data[e]}</Typography>
                  </ListItemText>
                </Item>
              </ListItemRoot>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default RealEstateInfo;
