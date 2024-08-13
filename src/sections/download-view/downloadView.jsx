import React from 'react';
import { faker } from '@faker-js/faker';

import { Grid } from '@mui/material';

import Overview from './overview';
import ContactInfoCard from './ContactInfoCard'; // Ensure this import is correct
import PersonalInfoCard from './personalInfoCard';
import TimeLineInfoCard from './EducationInfoCard';

const DownloadView = () => {
  const data = JSON.parse(sessionStorage.getItem("data"));
  console.log(data)
  const renderShareableComponents = () =>
    data?.shareable_informations?.map((info) => {
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
