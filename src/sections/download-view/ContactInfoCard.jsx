import React from 'react';
import { faker } from '@faker-js/faker';

import { Card, Grid, Typography, CardContent } from '@mui/material';

import { PersonalInfo, PersonalInfoItems } from './styled';

// mock data
export const contacts = [...Array(2)].map((_, index) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
}));
const ContactInfoCard = () => (
  <Grid item mb={3} xs={12} md={6} lg={6}>
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ color: '#212529', fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}
        >
          Contact Information
        </Typography>
        {contacts.map((c, i) => (
          <>
            <PersonalInfo key={c.id}>
              <PersonalInfoItems>
                <div className="title">Contact name</div>
                <div className="text">{c.name}</div>
              </PersonalInfoItems>
              <PersonalInfoItems>
                <div className="title">Contact Phone</div>
                <div className="text">{c.phone}</div>
              </PersonalInfoItems>
              <PersonalInfoItems>
                <div className="title">Contact Email</div>
                <div className="text">
                  <a href="#">{c.email}</a>
                </div>
              </PersonalInfoItems>
              <PersonalInfoItems>
                <div className="title">Contact Address</div>
                <div className="text">{c.address}</div>
              </PersonalInfoItems>
            </PersonalInfo>
            {i !== contacts.length -1 && <hr />}
          </>
        ))}
      </CardContent>
    </Card>
  </Grid>
);

export default ContactInfoCard;
