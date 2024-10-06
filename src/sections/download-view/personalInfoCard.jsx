import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Divider, Typography, CardContent, ListItemText } from '@mui/material';

import { CustomListItems, CustomUnorderedList } from './styled';

const PersonalInfoCard = ({data}) => {
  const left = {width: '70%'}
    const right = {width: '30%'}
  return (
  <Grid item mb={3} xs={12} md={6} lg={6}>
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          mb={3}
        >
          Identification Information
        </Typography>
        {data && data.map((d, index) => (
          <>
        <CustomUnorderedList>
          <CustomListItems>
            <ListItemText sx={left} primary="Document No." />
            <ListItemText sx={right} secondary={d.shareable.document_number} />
          </CustomListItems>
          <CustomListItems>
            <ListItemText sx={left} primary="Document Type"/>
            <ListItemText sx={right} secondary={d.shareable.document_type} />
          </CustomListItems>
          <CustomListItems>
            <ListItemText sx={left} primary=" Date of issue"/>
            <ListItemText sx={right} secondary={d.shareable.date_of_issue} />
          </CustomListItems>
          <CustomListItems>
            <ListItemText sx={left} primary=" Exp Date"/>
            <ListItemText sx={right} secondary={d.shareable.date_of_expiry} />
          </CustomListItems>
          <CustomListItems>
            <ListItemText sx={left} primary="Issuing Country"/>
            <ListItemText sx={right} secondary={d.shareable.issuing_country} />
             
            
          </CustomListItems>
          <CustomListItems>
            <ListItemText sx={left} primary="Document Link"/>
            <ListItemText sx={right} secondary={d.shareable.document_url.url} />
          </CustomListItems>
        
        </CustomUnorderedList>
        {index !== data.length -1 && <Divider sx={{ marginY: 2 }} />}
          
          </>
        ))
      }
      </CardContent>
    </Card>
  </Grid>
)
}
PersonalInfoCard.propTypes = {
  data: PropTypes.object,
}
export default PersonalInfoCard;
