import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

import { Card, Button, Typography, CardContent } from '@mui/material';

import SeoIllustration from 'src/assets/illustration_seo';

import AlertDialog from '../modal/modal';
import ShareView from '../share-data/share-view';
import SavedSuccessModal from '../share-data/saved-success-modal';
// material
;

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  // boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: '#FCDAD1',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string
};

export default function AppWelcome({ displayName }) {
  const [open, setOpen] = useState(false);
  const [sharedSuccessfully, setsharedSuccessfully] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setsharedSuccessfully(true)
  };
  const handleSharedModal = () => {
    console.log('close modal');
    setsharedSuccessfully(false);
  };
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: 0,
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Typography gutterBottom variant="h4">
          Welcome <br/> {!displayName ? '...' : displayName} !
        </Typography>

        <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
        Take control of your data sharing and ensure your information is secure and up-to-date. To do so, please verify or create your access code, which will enable you to manage who can access your data.
        </Typography>

     
        <Button onClick={handleClickOpen} variant="contained" to="#" component={RouterLink}>
          {/* Verify/Generate Access Code */}
          Share Data
        </Button>
      </CardContent>

      <SeoIllustration
        sx={{
          width: 360,
          margin: { xs: 'auto', md: 'inherit' }
        }}
      />
      <AlertDialog handleClose={handleClose} fullWidth maxWidth="lg" title="Generate Access Code" component={<ShareView handleCloseModal={handleClose} />} open={open} />
      <AlertDialog handleClose={handleSharedModal} maxWidth="lg" title="Generate Access Code" component={<SavedSuccessModal handleCloseModal={handleSharedModal} />} open={sharedSuccessfully} />
    </RootStyle>
  );
}
