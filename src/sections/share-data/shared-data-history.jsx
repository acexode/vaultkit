import { useState } from 'react';

import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AlertDialog from 'src/sections/modal/modal';

import ShareView from './share-view';
import SharedTabSection from './shared-tab-section';
import SavedSuccessModal from './saved-success-modal';
import RequestDataView from '../access/request-data-view';

// ----------------------------------------------------------------------

export default function SharedDataView() {
  const [open, setOpen] = useState(false);
  const [requestModalOpen, setrequestModalOpen] = useState(false);
  const [sharedSuccessfully, setsharedSuccessfully] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleRequestModalOpen = () => {
    setrequestModalOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setsharedSuccessfully(true);
  };
  const handleRequestModalClose = () => {
    setrequestModalOpen(false);
  };
  const handleSharedModal = () => {
    console.log('close modal');
    setsharedSuccessfully(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shared History</Typography>

        <Box>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            // color="inherit"
            startIcon={<Iconify icon="eva:share-fill" />}
          >
            Share Data
          </Button>
          <Button
            variant="contained"
            onClick={handleRequestModalOpen}
            color="inherit"
            sx={{ mx: 2 }}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Request Data
          </Button>
        </Box>
      </Stack>

      <Card>
        <SharedTabSection />
      </Card>
      <AlertDialog
        fullWidth
        // maxWidth="lg"
        component={<RequestDataView handleClose={handleRequestModalClose} />}
        open={requestModalOpen}
      />
      <AlertDialog
        fullWidth
        maxWidth="lg"
        component={<ShareView handleCloseModal={handleClose} />}
        open={open}
      />
      <AlertDialog
        maxWidth="lg"
        title="Generate Access Code"
        component={<SavedSuccessModal handleCloseModal={handleSharedModal} />}
        open={sharedSuccessfully}
      />
    </Container>
  );
}
