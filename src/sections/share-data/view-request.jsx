import React from 'react';

import { Box, Grid, Stack, Button, styled, Container, Typography, DialogActions } from '@mui/material';

import Iconify from 'src/components/iconify';

const ItemsStyle = styled(Grid)(({ theme, bgcolor }) => ({
  // boxShadow: 'none',
  borderRadius: '8px',
  padding: '8px',
  marginBottom: '2px',
  backgroundColor: bgcolor ? '#FCDAD1' : '#fff',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));
const ViewRequest = () => {
  console.log('view request');
  const selectedRequest = {
    id: 'John Doe Profile Data',
    requester: 'Maryann Doe',
    data: 'Personal Data, Contact Data, Employment History',
    status: 'Pending',
    date: '2023-06-01',
  };
  return (
    <Container sx={{ px: 2 }}>
        <Box textAlign="center" mb={3}>
            <Typography variant='h4'> Request Details</Typography>
        </Box>
        <Grid container spacing={2} sx={{width: '100%'}}>
      <ItemsStyle item xs={12} md={12}>
        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
          <Box sx={{width: '50%'}}>Request Title:</Box> <Box>{selectedRequest.id}</Box>
        </Stack>
      </ItemsStyle>
      <ItemsStyle item xs={12} md={12} bgcolor>
        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
          <Box sx={{width: '50%'}}>Requester:</Box> <Box textAlign="right">{selectedRequest.requester}</Box>
        </Stack>
      </ItemsStyle>
      <ItemsStyle item xs={12} md={12}>
        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
          <Box sx={{width: '50%'}}>Data Requested:</Box> <Box textAlign="right">{selectedRequest.data}</Box>
        </Stack>
      </ItemsStyle>
      <ItemsStyle item xs={12} md={12} bgcolor>
        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
          <Typography>Status:</Typography> <Typography>{selectedRequest.status}</Typography>
        </Stack>
      </ItemsStyle>
      <ItemsStyle item xs={12} md={12}>
        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between">
          <Typography>Date:</Typography> <Typography>{selectedRequest.date}</Typography>
        </Stack>
      </ItemsStyle>
    </Grid>
    <DialogActions sx={{mt: 2}}>
            <Button variant='outlined' startIcon={<Iconify src="" />}>
              Reject Request
            </Button>
            <Button variant='contained' startIcon={<Iconify src="" />}>
              Share Data
            </Button>
          </DialogActions>
    </Container>
  );
};

export default ViewRequest;
