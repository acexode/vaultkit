import { faker } from '@faker-js/faker';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';

import { Card } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { requestDataEndpoint, notificationEndpoint } from 'src/configs/endpoints';

import EmptyContent from 'src/components/common/EmptyContent';

import AppTasks from '../app-tasks';
import AppWelcome from '../AppWelcome';
import AppOrderTimeline from '../app-order-timeline';

export default function AppView() {
  const { getBasicInfo, user } = useAuth();
  const [displayName, setdisplayName] = useState('')
  const [requestData, setRequestData] = useState(null);
  const [activities, setActivities] = useState(null);
  
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (user) {
      if(user.business_type){
        setdisplayName(user.name)
      }else{
        setdisplayName(user?.basic?.first_name)
      }
      getBasicInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const url = notificationEndpoint(user.id);
        const response = await axiosInstance.get(url.allActivities);
        if (response?.data && response?.status === 200) {
          setActivities(response?.data?.activity_log.slice(0, 5));
        } else if (response?.error) {
          enqueueSnackbar(response?.error?.message, {
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
    fetchActivities();
  }, [enqueueSnackbar, user.id]);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const url = requestDataEndpoint(user.id);
        const response = await axiosInstance.get(url.sentDataRequest);
       
        if (response?.data && response?.status === 200) {
          setRequestData(response?.data);
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
          <AppWelcome displayName={displayName} />
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

        <Grid xs={12} md={6} lg={4} >
          {activities && activities?.length > 0 ? (
            <AppOrderTimeline
              title="Recent Activities"
              list={activities?.map((activity, index) => ({
                id: faker.string.uuid(),
                title: `Event: ${activity.event}`,
                type: `order${index + 1}`,
                time: new Date(activity.created_at).toLocaleString(),
              }))}
            />
          ) : (
            <Card sx={{height: '100%'}}>
              <EmptyContent title="No Recent Activities" />
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
