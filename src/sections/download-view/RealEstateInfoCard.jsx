import React from 'react'
import PropTypes from 'prop-types';

import { Card,  Grid, Divider,  Typography, CardContent, ListItemText } from '@mui/material';

import { CustomListItems, CustomUnorderedList } from './styled';

const RealEstateInfoCard = ({data}) =>{
    const left = {width: '70%'}
    const right = {width: '30%'}
    console.log(data);
    return (
    <Grid item mb={3} xs={12} md={6} lg={6}>
    <Card className="profile-box" sx={{ flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div" mb={3}>
          Real Estate Information
          
        </Typography>

      
        {data && data.map((d, index) => (
            <>
            <CustomUnorderedList>
            <CustomListItems>
                <ListItemText sx={left} primary="Property Address"  />
                <ListItemText sx={right} secondary={d.shareable.property_address} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="City / State"  />
                <ListItemText sx={right} secondary={`${d.shareable.city} / ${d.shareable.state}`} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Postal Code"  />
                <ListItemText sx={right} secondary={d.shareable.postal_code} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Property Type"  />
                <ListItemText sx={right} secondary={d.shareable.property_type} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Property Value "  />
                <ListItemText sx={right} secondary={d.shareable.property_value} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Rental Income"  />
                <ListItemText sx={right} secondary={d.shareable.rental_income} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Mortgage Details"  />
                <ListItemText sx={right} secondary={d.shareable.mortgage_details} />
            </CustomListItems>
            
            </CustomUnorderedList>
            {index !== data.length -1 && <Divider sx={{ marginY: 2 }} />}
            </>

        ))}

        

      
      </CardContent>
    </Card>

    </Grid>
  );
}





  RealEstateInfoCard.propTypes = {
  data: PropTypes.object,
}
export default RealEstateInfoCard
