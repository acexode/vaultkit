/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Card, Grid, Button, Typography, CardContent } from '@mui/material';

import hero from 'src/assets/hero.png';

import {
  ProfileImg,
  ProfileView,
  ProfileBasic,
  PersonalInfo,
  ProfileImgWrap,
  ProfileInfoLeft,
  PersonalInfoItems,
} from './styled';

const Overview = () => {
  console.log('download view');
  return (
    <Grid item mb={3} xs={12} md={12} lg={12}>
    <Card>
      <CardContent>
        <ProfileView>
          <ProfileImgWrap>
            <ProfileImg>
              <a href="#">
                <img src={hero} />
              </a>
            </ProfileImg>
          </ProfileImgWrap>
          <ProfileBasic>
            <Grid container >
              <Grid item sx={12} sm={12} md={5} pr={2}>
                <ProfileInfoLeft>
                  <Typography variant="h3" mb={0}>
                    Sir Abubakar
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#7A7C7F' }}>
                    Software Engineer
                  </Typography>
                  <small className="text-muted">Web Designer</small>
                  <div className="staff-id">Gender : Male</div>
                  <div className="small doj text-muted">Phone number : 07070069690</div>
                  <div className="staff-msg">
                    <Button variant="contained"  sx={{my: 1}}>
                      Download Information
                    </Button>
                  </div>
                </ProfileInfoLeft>
              </Grid>
              <Grid item sx={12} sm={12} md={7}>
                <PersonalInfo>
                  <PersonalInfoItems>
                    <div className="title">Insurance Number:</div>
                    <div className="text">
                      <a href="#">9876543210</a>
                    </div>
                  </PersonalInfoItems>
                  <PersonalInfoItems>
                    <div className="title">Email:</div>
                    <div className="text">
                      <a href="#">sirbakr@example.com</a>
                    </div>
                  </PersonalInfoItems>
                  <PersonalInfoItems>
                    <div className="title">Birthday:</div>
                    <div className="text">24th July</div>
                  </PersonalInfoItems>
                  <PersonalInfoItems>
                    <div className="title">Address:</div>
                    <div className="text">1861 Bayonne Ave, Bwari LGA, Abuja, 08759</div>
                  </PersonalInfoItems>
                  <PersonalInfoItems>
                    <div className="title">Nationality:</div>
                    <div className="text">Nigerian</div>
                  </PersonalInfoItems>
                </PersonalInfo>
              </Grid>
            </Grid>
          </ProfileBasic>
          <div className="pro-edit">
            <a
              data-bs-target="#profile_info"
              data-bs-toggle="modal"
              className="edit-icon"
              href="#"
            >
              <i className="fa-solid fa-pencil" />
            </a>
          </div>
        </ProfileView>
      </CardContent>
    </Card>
  </Grid>
  );
};

export default Overview
