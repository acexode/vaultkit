
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import useDialogState from 'src/routes/hooks/useSharedData';

import Iconify from 'src/components/iconify';

import AlertDialog from 'src/sections/modal/modal';

import ShareView from './share-view';
import DataDetails from './view-data';
import SharedTabSection from './shared-tab-section';
import SavedSuccessModal from './saved-success-modal';
import RequestDataView from '../access/request-data-view';

// ----------------------------------------------------------------------

export default function SharedDataView() {
  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  const card = {
    name: 'lorem ipsum dolor',
     description: 'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
     assignee: [
      {
          "id": "473d2720-341c-49bf-94ed-556999cf6ef7",
          "avatar": "/static/mock-images/avatars/avatar_2.jpg",
          "name": "Soren Durham"
      }
  ],
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shared History</Typography>

        <Box>
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
        // maxWidth="lg"
        component={<RequestDataView handleClose={closeDialog} />}
        open={isDialogOpen('request-data-view')}
      />
      <AlertDialog
        fullWidth
        maxWidth="lg"
        component={<ShareView handleCloseModal={closeDialog} />}
        open={isDialogOpen('share-data-view')}
      />
      <AlertDialog
        maxWidth="lg"
        title="Generate Access Code"
        component={<SavedSuccessModal handleCloseModal={closeDialog} />}
        open={isDialogOpen('success-view')}
      />
      <DataDetails isOpen={isDialogOpen('data-details')} card={card} onClose={closeDialog} />
    </Container>
  );
}
