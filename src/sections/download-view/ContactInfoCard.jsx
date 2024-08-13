import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Typography, CardContent } from '@mui/material';

import { PersonalInfo, PersonalInfoItems } from './styled';


const ContactInfoCard = ({obj}) => {
  console.log("")
  return (
    <Grid item mb={3} xs={12} md={6} lg={6}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ color: '#212529', fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}
          >
            Contact Information
          </Typography>
          
          <PersonalInfo>
            {Object.entries(obj).map(([key, value]) => (
              <PersonalInfoItems key={key}>
                <div className="title">{key.replace(/_/g, ' ')}</div>
                <div className="text">{value}</div>
              </PersonalInfoItems>
            ))}
          </PersonalInfo>
        </CardContent>
      </Card>
    </Grid>
  );
};


ContactInfoCard.propTypes = {
  obj: PropTypes.object
};

export default ContactInfoCard;
