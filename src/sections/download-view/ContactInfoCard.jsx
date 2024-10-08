import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Typography, CardContent, ListItemText } from '@mui/material';

import { toSentenceCaseKey } from '../user/utils';
import { CustomListItems, CustomUnorderedList } from './styled';


const ContactInfoCard = ({obj}) =>  {
  const left = {width: '70%'}
  const right = {width: '30%'}
  const {id, home_address, phone_number,postal_code, province, city, ...extract} = obj;
  const data = {
    home_address, phone_number,postal_code, province, city, ...extract
  }

  return (
    <Grid item mb={3} xs={12} md={6} lg={6}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
        <Typography variant="h6" component="div" mb={3}>
            Contact Information
          </Typography>
          <CustomUnorderedList>
            {extract && Object.entries(data).map(([key, value]) => (
              <CustomListItems key={`${key  }${  id}`}>
                <ListItemText sx={left} primary={toSentenceCaseKey(key)} />
                <ListItemText sx={right} secondary={value} />
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
