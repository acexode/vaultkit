import { faker } from '@faker-js/faker';
import { enqueueSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import axiosInstance from 'src/utils/axios';

import { downloadEndpoint } from 'src/configs/endpoints';

import ContactInfoCard from './ContactInfoCard'; // Ensure this import is correct
import Overview from './overview';
import PersonalInfoCard from './personalInfoCard';
import TimeLineInfoCard from './EducationInfoCard';

const DownloadView = () => {
  
  const [downloadData, setDownloadData] = useState([])
  const {user} = useAuth()
  useEffect(() => {
    const fetchDownloadData = async () => {
      try {
        const url = downloadEndpoint(user.id);
        const response = await axiosInstance.get(url.allDetails);
        
        if (response.data && response.status === 200) {
          setDownloadData(response.data);
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
    fetchDownloadData();
  }, [user.id])
  const renderShareableComponents = () =>
    downloadData?.shareable_informations?.map((info) => {
      switch (info.shareable_type) {
        case "ContactInformation":
          return <ContactInfoCard key={info.id} obj={info.shareable} />;
        case "EducationDatum":
          return null;
        case "ResidentialHistory":
          return null;
        default:
          return null;
      }
    });

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Overview />
      <PersonalInfoCard />
      {renderShareableComponents()}
      <TimeLineInfoCard
        title="Education Information"
        list={[...Array(4)].map((_, index) => ({
          id: faker.string.uuid(),
          title: [
            'Msc Management Computer Science',
            'Bsc Management Computer Science',
            'High School Certificate',
            'Computer Science Bootcamp',
          ][index],
          type: `order${index + 1}`,
          time: faker.date.past(),
        }))}
      />
    </Grid>
  );
};

export default DownloadView;
