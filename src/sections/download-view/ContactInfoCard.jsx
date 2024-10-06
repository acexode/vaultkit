import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Typography, CardContent, ListItemText } from '@mui/material';

import { toSentenceCase } from '../user/utils';
import { CustomListItems, CustomUnorderedList } from './styled';


const ContactInfoCard = ({obj}) =>  {
  const left = {width: '70%'}
  const right = {width: '30%'}
  const {id, home_address, phone_number,postal_code, province, city, ...extract} = obj;
  const data = {
    home_address, phone_number,postal_code, province, city, ...extract
  }
  console.log(id);
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
          <CustomUnorderedList>
            {extract && Object.entries(data).map(([key, value]) => (
              <CustomListItems key={key}>
                <ListItemText sx={left} primary={toSentenceCase(key)} />
                <ListItemText sx={right} primary={value} />
              </CustomListItems>
            ))}
          </CustomUnorderedList>
        </CardContent>
      </Card>
    </Grid>
  )
}


ContactInfoCard.propTypes = {
  obj: PropTypes.object
};

export default ContactInfoCard;
