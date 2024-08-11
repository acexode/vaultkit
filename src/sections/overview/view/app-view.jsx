import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';

import { Card } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint } from 'src/configs/endpoints';

import EmptyContent from 'src/components/common/EmptyContent';

import AppTasks from '../app-tasks';
import AppWelcome from '../AppWelcome';
import AppOrderTimeline from '../app-order-timeline';

// ----------------------------------------------------------------------

export default function AppView() {
  const { getBasicInfo, user } = useAuth();
  const [requestData, setRequestData] = useState(null);
  console.log(requestData);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (user) {
      getBasicInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const url = requestDataEndpoint(user.id);
        const response = await axiosInstance.get(url.sentDataRequest);
       
        if (response.data && response.status === 200) {
          setRequestData(response.data);
        } else if (response.error) {
          enqueueSnackbar(response.error.message, {
            autoHideDuration: 1000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'error',
          });
        }
      } catch (error) {
        console.log(error);
        enqueueSnackbar('An error occurred while fetching data.', {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        });
      }
    };
    fetchRequestData();
  }, [enqueueSnackbar, setRequestData, user.id]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={12} >
          <AppWelcome displayName={user?.basic?.first_name} />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        <Grid xs={12} md={6} lg={8} >
          {requestData && requestData.length > 0 ? (
            <AppTasks title="Profile Access Request" list={requestData} />
          ) : (
            <Card sx={{height: '100%'}}>
              <EmptyContent title="You Don't Have Data Request" />
            </Card>
          )}
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
