import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { AccessView } from 'src/sections/access';
import AlertDialog from 'src/sections/modal/modal';

import SharedTabSection from './shared-tab-section';

// ----------------------------------------------------------------------

export default function SharedDataView() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shared History</Typography>

        <Button
          variant="contained"
          onClick={handleClickOpen}
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Share Data
        </Button>
      </Stack>

      <Card>
        <SharedTabSection />
      </Card>
      <AlertDialog
        title="Generate Access Code"
        component={<AccessView handleClose={handleClose} />}
        open={open}
      />
    </Container>
  );
}
