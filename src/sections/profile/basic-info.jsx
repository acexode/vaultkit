import React from 'react';
// import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, ListItemText } from '@mui/material';

import { convertToSentenceCase } from 'src/utils/common-utils';

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
const BasicInfo = () => {
  console.log(console.log('basic info'));
  const { handleCurrentForm } = useGlobalContext();
  const data = null

  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      {data ? 
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
                <ListItemText sx={{ minWidth: '84px' }}>Personal Info</ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  <Button variant="outlined" onClick={() => handleCurrentForm('personal-info')}>
                    Edit Info
                  </Button>
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
          
          
        </Card>:
        <>
        <EmptyContent
        title="You havent added any data"
        description="Click the button below to start adding your data"
      />
           <Button onClick={()=> handleCurrentForm('personal-info', false)} variant='outlined' size='lg' color='inherit'>Add Data</Button>
        
        </>
          }
      </Stack>
    </Container>
  );
};

export default BasicInfo;
