import React from 'react';
// import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {  Box, Button, Container, Typography, ListItemText } from '@mui/material';

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
const BasicInfo = () => {
  console.log(console.log('basic info'));
  const {handleCurrentForm} = useGlobalContext()
  const data = {
    first_name: 'Abubakar',
    last_name: 'Abdulwahab',
    middle_name: 'Adamu',
    email: 'abu@gmail.com',
    social_insurance_number: '302938288482',
    date_of_birth: '18/06/1992',
    gender: 'Male',
    phone_number: '070584585848',
    mailing_address: 'Kubwa Abuja',
    nationality: 'Nigeria',
    preferred_language: 'English',
    profile_picture_url: '',
    social_media_links: '',
    short_bio: '',
    last_login_at: '',
    account_status: '',
    account_creation_date: '',
    is_private: '',
    work_authorization: '',
    work_permit_upload_url: '',
    residency_status: '',
  };

  function convertToSentenceCase(str) {
    // Replace underscores with spaces
    str = str.replace(/_/g, ' ');

    // Convert to sentence case
    console.log(str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase()));
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
          <Box sx={{mb: 3}}>
             
             <Item>
               <ListItemText sx={{minWidth: '84px'}}>Personal Info</ListItemText>
               <ListItemText sx={{textAlign: 'right'}}>
                 <Button variant="outlined" onClick={() => handleCurrentForm('personal-info')}>Edit Info</Button>
               </ListItemText>
             </Item>

      
         </Box>
                {Object.keys(data).map(e => (
            <ListItemRoot>
             
                <Item>
                  <ListItemText sx={{minWidth: '84px'}}>{convertToSentenceCase(e)}</ListItemText>
                  <ListItemText sx={{textAlign: 'right'}}>
                    <Typography sx={{fontWeight: '700'}}>{data[e]}</Typography>
                  </ListItemText>
                </Item>

         
            </ListItemRoot>
                ))}
          </Stack>
          {/* <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<ListSubheader>Basic Info</ListSubheader>}
          >
            <ListItem sx={{display: 'flex', justifyContent: 'space-around'}}>
              <ListItemText primary="Wi-Fi">Name</ListItemText>
              <ListItemText>Abubakar</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
            </ListItem>
          </List> */}
        </Card>
      </Stack>
    </Container>
  );
};

export default BasicInfo;
