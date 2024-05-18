/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { faker } from '@faker-js/faker';

import { Grid } from '@mui/material';

import Overview from './overview';
import ContactInfoCard from './ContactInfoCard';
import PersonalInfoCard from './personalInfoCard';
import TimeLineInfoCard from './EducationInfoCard';

const DownloadView = () => {
  console.log('download view');
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Overview />
      <PersonalInfoCard />
      <ContactInfoCard />
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
      <TimeLineInfoCard
        title="Employment Information"
        list={[...Array(4)].map((_, index) => ({
          id: faker.string.uuid(),
          title: [
            'Product Engineer, Microsoft',
            'Engineering Team Lead, Facebook',
            'Senior Software Engineer Amazon',
            'Senior Software Engineer Netflix',
          ][index],
          type: `order${index + 1}`,
          time: faker.date.past(),
        }))}
       />
    </Grid>
  );
};

export default DownloadView;
