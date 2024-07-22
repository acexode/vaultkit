/* eslint-disable no-restricted-syntax */
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, ListItemText } from '@mui/material';

import axiosInstance from 'src/utils/axios';
import { convertToSentenceCase } from 'src/utils/common-utils';

import { useGlobalContext } from 'src/context/context';
import { profileEndpoint } from 'src/configs/endpoints';

import EmptyContent from 'src/components/common/EmptyContent';

const ListItemRoot = styled('div')(({ theme }) => ({
  display: 'block',
  borderRadius: '8px',
  alignItems: 'center',
  marginBottom: '12px',
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

  const { handleCurrentForm } = useGlobalContext();
  const [data, setData] = useState(null);
  
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await basicAPI._readMany();
        const response = await axiosInstance.get(profileEndpoint.basic);
        if (response.data) {
          setData(response.data);
          
        } else if (response.error) {
          enqueueSnackbar(response.error.message, {
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'error',
          });
        }
      } catch (error) {
        
        enqueueSnackbar('An error occurred while fetching data.', {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        });
      }
    };
    fetchData();
  }, [enqueueSnackbar]);

  const renderItem = (item) => {
    
    if (typeof item === 'string') {
       if(item.startsWith('http')){

         return <a href={item}>Link</a>;
       }
        return item
       
    } if (typeof item === 'object' && item != null) {
      // Assuming the object has a single key-value pair
      console.log(item)
      const value = Object.keys(item)[0];
     
      if (typeof item[value] === 'string' && item[value].startsWith('http')) {
        return <a href={value}>Link</a>;
      }
      return value;
    }
    return '';
  };
 
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        {data ? (
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
                    <Button variant="outlined" onClick={() => handleCurrentForm('personal-info', data?.id)}>
                      Edit Info
                    </Button>
                  </ListItemText>
                </Item>
              </Box>
              {Object.keys(data)
                .filter(e => !['id', 'account_creation_date', 'ip_address', 'last_login_at', 'user_id', 'created_at', 'updated_at', 'is_private'].includes(e))
                .map((e) => (
                  <ListItemRoot key={e}>
                    <Item>
                      <ListItemText sx={{ minWidth: '84px' }}>{convertToSentenceCase(e)}</ListItemText>
                      <ListItemText sx={{ textAlign: 'right' }}>
                        <Typography sx={{ fontWeight: '700' }}>{renderItem(data[e])}</Typography>
                      </ListItemText>
                    </Item>
                  </ListItemRoot>
              ))}
            </Stack>
          </Card>
        ) : (
          <>
            <EmptyContent
              title="You haven't added any data"
              description="Click the button below to start adding your data"
            />
            <Button onClick={() => handleCurrentForm('personal-info')} variant='outlined' size='lg' color='inherit'>
              Add Data
            </Button>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default BasicInfo;
