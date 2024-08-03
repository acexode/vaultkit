import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import sharefill from '@iconify/icons-eva/share-outline';

import { Stack, Button, styled, TextField, Typography } from '@mui/material';

const IconWrapper = styled('div')(({ theme }) => ({
  background: '#ffebda',
  width: '65px',
  height: '65px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px',
}));

const SavedSuccessModal = ({ handleCloseModal }) => {
  console.log('saved');
  const [showField, setshowField] = useState(false);
  return (
    <div className="success-message text-center">
      <IconWrapper>
        <Icon fontSize={24} icon={sharefill} />
      </IconWrapper>
      <Typography textAlign="center" variant="h4">
        Data Shared Successfully!!!
      </Typography>
      <Typography textAlign="center" my={3} sx={{ fontSize: '14px' }}>
        Would you like to group the shared data for future use ?
      </Typography>
      {!showField && (
        <Stack direction="row" justifyContent="center" spacing={3}>
          <Button onClick={() => handleCloseModal('success-view')} variant="outlined">
            No, Dismiss
          </Button>
          <Button onClick={() => setshowField(!showField)} variant="contained" mx={3}>
            Yes, Create Category
          </Button>
        </Stack>
      )}
      {showField && (
        <Stack direction="row" justifyContent="center" spacing={3} my={3}>
          <TextField
            name="category"
            label="Category Name"
            helperText="Saved data can be shared multiple times"
          />
          <Button
            size="small"
            onClick={handleCloseModal}
            variant="outlined"
            ml={3}
            sx={{ height: '60px' }}
          >
            Cancel
          </Button>
          <Button size="small" variant="contained" ml={3} sx={{ height: '60px' }}>
            Save
          </Button>
        </Stack>
      )}
    </div>
  );
};
SavedSuccessModal.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default SavedSuccessModal;
