
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import useDialogState from 'src/routes/hooks/useSharedData';

import useAuth from 'src/hooks/useAuth';

import AlertDialog from 'src/sections/modal/modal';

import ShareView from './share-view';
import OrgDataMenu from './org-data-menu';
import OrgInvitesMenu from './org-invites-menu';
import RequestDataView from '../access/request-data-view';
import SavedSuccessModal from '../modal/saved-success-modal';
import { BulkInvite, SingleInvite } from '../profile/view/constant';
import BulkInviteModal from '../modal/organization-modals/bullk-invite';
import SingleInviteModal from '../modal/organization-modals/single-invite';
import OrganizationSharedTabSection from './components/organization-shared-tab-section';

// ----------------------------------------------------------------------

export default function OrganizationSharedDataView() {
  const themes = useTheme();
  const {user} = useAuth()
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));

  const { openDialog, closeDialog, isDialogOpen } = useDialogState();
  // const card = {
  //   name: 'lorem ipsum dolor',
  //    description: 'Basic Info, Contact Info, Employment Info, Education Info',
  //    assignee: [
  //     {
  //         "id": "473d2720-341c-49bf-94ed-556999cf6ef7",
  //         "avatar": "/static/mock-images/avatars/avatar_2.jpg",
  //         "name": "Soren Durham"
  //     }
  // ],
  // }

  return (
    <Container maxWidth="xl">
      <Stack direction={!isMobile ? "row" : "column"} alignItems="center" justifyContent="space-end" mb={5}>
      <Box sx={{width: '100%'}}>
        <Typography variant="h4">{user?.name}</Typography>
        <Typography variant="caption"> {user?.business_type}</Typography>
        <Typography variant="subtitle1"> Total Employees - 0 </Typography>

        </Box>

        <Box sx={{display: 'flex', width: '100%', mt: isMobile ? 2 : 0, justifyContent: 'end'}}>
            <OrgDataMenu openDialog={openDialog} />
            <OrgInvitesMenu openDialog={openDialog} />
        
        </Box>
      </Stack>

      <Card sx={{mt: 3}}>
        <OrganizationSharedTabSection />
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
      <AlertDialog handleClose={()=> closeDialog(SingleInvite)} fu maxWidth="lg" title="Generate Access Code" component={<SingleInviteModal user={user} handleCloseModal={closeDialog} />} open={isDialogOpen(SingleInvite)} />
      <AlertDialog handleClose={()=> closeDialog(BulkInvite)} fu maxWidth="lg" title="Generate Access Code" component={<BulkInviteModal user={user} handleCloseModal={closeDialog} />} open={isDialogOpen(BulkInvite)} />
      
      {/* <DataDetails isOpen={isDialogOpen('data-details')} card={card} onClose={closeDialog} /> */}
    </Container>
  );
}
