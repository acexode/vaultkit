import React from 'react';

import { Card, Grid, Typography, CardContent } from '@mui/material';

import { PersonalInfo, PersonalInfoItems } from './styled';

const PersonalInfoCard = () => (
  <Grid item mb={3} xs={12} md={6} lg={6}>
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ color: '#212529', fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}
        >
          Personal Information
        </Typography>
        <PersonalInfo>
          <PersonalInfoItems>
            <div className="title">Passport No.</div>
            <div className="text">9876543210</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Passport Exp Date.</div>
            <div className="text">9876543210</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Tel</div>
            <div className="text">
              <a href="#">9876543210</a>
            </div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Nationality</div>
            <div className="text">Indian</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Religion</div>
            <div className="text">Christian</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Marital status</div>
            <div className="text">Married</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">Employment of spouse</div>
            <div className="text">No</div>
          </PersonalInfoItems>
          <PersonalInfoItems>
            <div className="title">No. of children</div>
            <div className="text">2</div>
          </PersonalInfoItems>
        </PersonalInfo>
      </CardContent>
    </Card>
  </Grid>
);

export default PersonalInfoCard;
