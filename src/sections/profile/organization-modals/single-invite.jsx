import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

import { Stack, Button, styled, TextField, Container, Typography } from '@mui/material';

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

const SingleInviteModal = ({ handleCloseModal }) => {
  console.log('saved');
  const [submitted, setsubmitted] = useState(false)

  const handleSendInvite = ()=>{
    setsubmitted(true)
  }
  return (
    <Container sx={{width: '100%'}}>
      <IconWrapper>
        <Icon fontSize={24} icon="mingcute:invite-line" />
      </IconWrapper>
      <Typography textAlign="center" variant="h4">
        Invite an employee
      </Typography>
      {!submitted && (
        <Stack direction="column" justifyContent="center" spacing={3} my={3}>
          <TextField
            name="email"
            label="Email"
            helperText="Enter email of the employee or user you want to invite"
          />
          <Button
            size="small"
            onClick={handleSendInvite}
            variant="outlined"
            ml={3}
            sx={{ height: '60px' }}
          >
            Send Invite
          </Button>
          <Button size="small" variant="contained" ml={3} sx={{ height: '60px' }}>
            Cancel
          </Button>
        </Stack>
      )}
    </Container>
  );
};
SingleInviteModal.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default SingleInviteModal;
