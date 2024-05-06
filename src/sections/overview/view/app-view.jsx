import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppWelcome from '../AppWelcome';
// import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
// import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
        Hi Abubakar, Welcome back 👋
      </Typography> */}

      <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
            <AppWelcome displayName="Sir Abubakar" />
          </Grid>

      {/* <Grid xs={12} md={4} lg={12}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid> */}
        {/* <Grid xs={12} sm={12} md={12}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid> */}

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

      

        {/* <Grid xs={12} md={6} lg={8}>
        <AppNewsUpdate
            title="Profile Request Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />

        </Grid> */}
      </Grid>
    </Container>
  );
}
