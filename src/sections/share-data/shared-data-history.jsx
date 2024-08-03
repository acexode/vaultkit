
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import useDialogState from 'src/routes/hooks/useSharedData';

import Iconify from 'src/components/iconify';

import AlertDialog from 'src/sections/modal/modal';

import ShareView from './share-view';
import DataDetails from './view-data';
import RequestDataView from '../access/request-data-view';
import SavedSuccessModal from '../modal/saved-success-modal';
import SharedTabSection from './components/shared-tab-section';

// ----------------------------------------------------------------------

export default function SharedDataView() {
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));

  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  const card = {
    name: 'lorem ipsum dolor',
     description: 'Basic Info, Contact Info, Employment Info, Education Info',
     assignee: [
      {
          "id": "473d2720-341c-49bf-94ed-556999cf6ef7",
          "avatar": "/static/mock-images/avatars/avatar_2.jpg",
          "name": "Soren Durham"
      }
  ],
  }

  return (
    <Container maxWidth="xl">
      <Stack direction={!isMobile ? "row" : "column"} alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shared History</Typography>

        <Box sx={{display: 'flex', mt: isMobile ? 2 : 0}}>
          <Button
            variant="contained"
            onClick={() => openDialog('share-data-view')}
            // color="inherit"
            startIcon={<Iconify icon="eva:share-fill" />}
          >
            Share Data
          </Button>
          <Button
            variant="contained"
            onClick={() => openDialog('request-data-view')}
            color="inherit"
            sx={{ mx: 2 }}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Request Data
          </Button>
        </Box>
      </Stack>

      <Card>
        <SharedTabSection handleViewDetails={openDialog} />
      </Card>
      <AlertDialog
        fullWidth
        showClose={false}
        // maxWidth="lg"
        component={<RequestDataView handleClose={closeDialog} />}
        open={isDialogOpen('request-data-view')}
      />
      <AlertDialog
        fullWidth
        maxWidth="lg"
        handleClose={() =>closeDialog('share-data-view')}
        component={<ShareView handleCloseModal={closeDialog} />}
        open={isDialogOpen('share-data-view')}
      />
      <AlertDialog
        maxWidth="lg"
        showClose={false}
        title="Generate Access Code"
        handleClose={closeDialog}
        component={<SavedSuccessModal handleCloseModal={closeDialog} />}
        open={isDialogOpen('success-view')}
      />
      <DataDetails isOpen={isDialogOpen('data-details')} card={card} onClose={closeDialog} />
    </Container>
  );
}
