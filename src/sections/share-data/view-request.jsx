import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid, Stack, Button, styled, Container, Typography, DialogActions } from '@mui/material';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint } from 'src/configs/endpoints';

import Iconify from 'src/components/iconify';
// import useAuth from 'src/hooks/useAuth';

const ItemsStyle = styled(Grid)(({ theme, bgcolor }) => ({
  borderRadius: '8px',
  padding: '8px',
  marginBottom: '2px',
  backgroundColor: bgcolor ? '#FCDAD1' : '#fff',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function mapShareableTypes(arrayOfObjects) {
  return arrayOfObjects?.map((obj) => {
    switch (obj.type) {
      case 'basic_information':
        return 'Basic Information';
      case 'contact':
        return 'Contact Information';
      case 'education':
        return 'Education';
      case 'financial':
        return 'Financial Information';
      case 'identification':
        return 'Identification';
      case 'realestate':
        return 'Real Estate';
      case 'residential':
        return 'Residential Information';
      default:
        return obj.type;
    }
  });
}


const ViewRequest = ({ data, handleCloseModal }) => {
 
  const [loading, setLoading] = useState()
  const types = mapShareableTypes(data?.requested_info.data)
  
  const { enqueueSnackbar } = useSnackbar();
  const approveRequest = async () => {
    try {
      const url = requestDataEndpoint(data?.id)
      setLoading(true)
      const response = await axiosInstance.patch(url.approve)
      if(response.status === 200){
        setLoading(false)
        enqueueSnackbar("Access Request Approved Successfully", {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'success',
        });
      }
      handleCloseModal()
    } catch (error) {
      setLoading(false)
      if(error.response.status === 500){
        enqueueSnackbar("Server error", {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        });
      }
    }
  }
  
    return (

    <Container sx={{ px: 2 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4">Request Details</Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        <ItemsStyle item xs={12} md={12}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
            <Box sx={{ width: '50%' }}>Request Title:</Box> <Box>{data?.title}</Box>
          </Stack>
        </ItemsStyle>
        <ItemsStyle item xs={12} md={12} bgcolor>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
            <Box sx={{ width: '50%' }}>Requester:</Box> <Box textAlign="right">{data?.requester ?? ""}</Box>
          </Stack>
        </ItemsStyle>
        <ItemsStyle item xs={12} md={12}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
            <Box sx={{ width: '50%' }}>Data Requested:</Box> <Box textAlign="right">
              {types?.map((type) => (
                <Typography>{type}</Typography>
              ))}
            </Box>
          </Stack>
        </ItemsStyle>
        <ItemsStyle item xs={12} md={12} bgcolor>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
            <Typography>Status:</Typography> <Typography>{data?.status}</Typography>
          </Stack>
        </ItemsStyle>
        <ItemsStyle item xs={12} md={12}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
            <Typography>Date:</Typography> <Typography>{formatDate(data?.start_time)}</Typography>
          </Stack>
        </ItemsStyle>
      </Grid>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant="outlined" startIcon={<Iconify src="" />}>
          Reject Request
        </Button>
        <LoadingButton startIcon={<Iconify src="" />} variant="contained" loading={loading} onClick={approveRequest}>
           Approve Request
        </LoadingButton>
      </DialogActions>
    </Container>
    )
}
  
  

ViewRequest.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    sender_id: PropTypes.number.isRequired,
    receiver_id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shareable_informations: PropTypes.array.isRequired,
    requested_info: PropTypes.object.isRequired,
    sender_type: PropTypes.string.isRequired,
    receiver_type: PropTypes.string.isRequired,
    selectedRequest: PropTypes.string.isRequired,
    requester: PropTypes.string.isRequired,
  }).isRequired,
  handleCloseModal: PropTypes.func.isRequired
};

export default ViewRequest;
