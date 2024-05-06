import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppWelcome from '../AppWelcome';
import AppOrderTimeline from '../app-order-timeline';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">

      <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
            <AppWelcome displayName="Sir Abubakar" />
          </Grid>



        <Grid xs={12} md={6} lg={8}>
        <AppTasks
            title="Profile Access Request"
            list={[
              { id: '1', name: 'John Doe requested Access to your profile' },
              { id: '2', name: 'Sarah Doe wants to acess your educational Background' },
              { id: '3', name: 'Wakanda requested Access to your employment history' },
              { id: '4', name: 'John Does requested Access to your profile' },
              { id: '5', name: 'John Does requested Access to your profile' },
              { id: '5', name: 'John Does requested Access to your profile' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Recent Activities"
            list={[...Array(4)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Acess granted to John Does',
                'You updated your profile',
                'Acess code generated for Sarah',
                'Deleted request from Wakanda',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>


      </Grid>
    </Container>
  );
}
