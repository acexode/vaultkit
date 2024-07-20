import React, { useState, useEffect } from 'react';
// import { useState } from 'react';


import { useSnackbar } from 'notistack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, ListItemText } from '@mui/material';

import { contactAPI } from 'src/apis';
import { useGlobalContext } from 'src/context/context';

import EmptyContent from 'src/components/common/EmptyContent';

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
const ContactInfo = () => {
  const {handleCurrentForm} = useGlobalContext();
  const [data, setData] = useState(null)
 
  const { enqueueSnackbar } = useSnackbar();

useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await contactAPI._readMany()
    
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
  

  function convertToSentenceCase(str) {
    // Replace underscores with spaces
    str = str.replace(/_/g, ' ');

    // Convert to sentence case
    // console.log(
    //   str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase())
    // );
    return str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase());
  }
  const allValuesAreNull = (obj) => {
    const keysToIgnore = ['id'];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (!keysToIgnore.includes(key) && obj[key] !== null) {
        return false;
      }
    }
    return true;
  };
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        {data && !allValuesAreNull(data) ? <Card
          sx={{
            p: 2,
            width: 1,
            maxWidth: 520,
          }}
        >
          <Stack>
            <Box sx={{ mb: 3 }}>
              <Item>
                <ListItemText sx={{ minWidth: '84px' }}>Contact Info</ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Button variant="outlined" onClick={() => handleCurrentForm('contact-info', data?.id)}>Edit Info</Button>
                </ListItemText>
              </Item>
            </Box>
            
            {Object.keys(data)
                .filter(e => e !== 'id') 
                .map((e) => (
                  <ListItemRoot key={e}>
                    <Item>
                      <ListItemText sx={{ minWidth: '84px' }}>{convertToSentenceCase(e)}</ListItemText>
                      <ListItemText sx={{ textAlign: 'right' }}>
                        <Typography sx={{ fontWeight: '700' }}>{data[e]}</Typography>
                      </ListItemText>
                    </Item>
                  </ListItemRoot>
                ))}
          </Stack>
        </Card>: <>
        <EmptyContent
        title="You havent added any data"
        description="Click the button below to start adding your data"
      />
           <Button onClick={()=> handleCurrentForm('contact-info', false)} variant='outlined' size='lg' color='inherit'>Add Data</Button>
        </>}
        
      </Stack>
    </Container>
  );
};

export default ContactInfo;
