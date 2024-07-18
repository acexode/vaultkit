import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

import { Stack, Button, styled, Container, Typography } from '@mui/material';

import { UploadSingleFile } from 'src/components/uploads';

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
const TemplateWrapper = styled('a')(({ theme }) => ({

  textDecoration: 'none',
  display: 'block',
  textAlign:'center'
}));

const BulkInviteModal = ({ handleCloseModal }) => {
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
        Upload employee 
      </Typography>
      <TemplateWrapper href=''>
        Download sample template
      </TemplateWrapper>
      {!submitted && (
        <Stack direction="column" justifyContent="center" spacing={3} my={3}>
            <UploadSingleFile label="CSV file" />
          <Button
            size="small"
            onClick={handleSendInvite}
            variant="outlined"
            ml={3}
            sx={{ height: '60px' }}
          >
            Send Invites
          </Button>
          <Button size="small" variant="contained" ml={3} sx={{ height: '60px' }}>
            Cancel
          </Button>
        </Stack>
      )}
    </Container>
  );
};
BulkInviteModal.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default BulkInviteModal;
