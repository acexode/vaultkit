/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Button, Typography, CardContent } from '@mui/material';

import hero from 'src/assets/hero.png';

import {
  ProfileImg,
  ProfileView,
  ProfileBasic,
  ProfileImgWrap, CustomListItems,
  ProfileInfoLeft,
  CustomUnorderedList,

} from './styled';

const Overview = ({data, email}) => {
 console.log()
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
                    {data?.first_name} {data?.last_name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#7A7C7F' }}>
                  {data?.nationality}
                  </Typography>
                  <small className="text-muted">{data?.preferred_language.toUpperCase()}</small>
                  <div className="staff-id">Gender : {data?.gender.toUpperCase()}</div>
                  <div className="small doj text-muted">Phone number : 07070069690</div>
                  <div className="staff-msg">
                    <Button variant="contained"  sx={{my: 1}}>
                      Download Information
                    </Button>
                  </div>
                </ProfileInfoLeft>
              </Grid>
              <Grid item sx={12} sm={12} md={7}>
                <CustomUnorderedList>
                  <CustomListItems>
                    <div className="title">ID Number:</div>
                    <div className="text">
                      <a href="#">{data?.identity_number}</a>
                    </div>
                  </CustomListItems>
                  <CustomListItems>
                    <div className="title">Email:</div>
                    <div className="text">
                      <a href="#">{data?.email}</a>
                    </div>
                  </CustomListItems>
                  <CustomListItems>
                    <div className="title">Birthday:</div>
                    <div className="text">{data?.date_of_birth}</div>
                  </CustomListItems>
                  <CustomListItems>
                    <div className="title">Address:</div>
                    <div className="text">{data?.mailing_address}</div>
                  </CustomListItems>
                  <CustomListItems>
                    <div className="title">Residency Status:</div>
                    <div className="text">{data?.residency_status}</div>
                  </CustomListItems>
                </CustomUnorderedList>
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

Overview.propTypes = {
  data: PropTypes.object,
  email: PropTypes.string
}

export default Overview
