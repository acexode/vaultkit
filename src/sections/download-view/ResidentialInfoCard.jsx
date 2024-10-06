import React from 'react'
import PropTypes from 'prop-types';

import { Card,  Grid, Divider,  Typography, CardContent, ListItemText } from '@mui/material';

import { CustomListItems, CustomUnorderedList } from './styled';

const ResidentialInfoCard = ({data}) =>{
    const left = {width: '70%'}
    const right = {width: '30%'}
    console.log(data);
    return (
    <Grid item mb={3} xs={12} md={6} lg={6}>
    <Card className="profile-box" sx={{ flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div" mb={3}>
          Residential History
          
        </Typography>

      
        {data && data.map((d, index) => (
            <>
            <CustomUnorderedList>
            <CustomListItems>
                <ListItemText sx={left} primary="Address"  />
                <ListItemText sx={right} secondary={d.shareable.last_address} />
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
                <ListItemText sx={left} primary="Landlord Name"  />
                <ListItemText sx={right} secondary={d.shareable.landlord_name} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Landlord Contact"  />
                <ListItemText sx={right} secondary={d.shareable.landlord_contact} />
            </CustomListItems>
            <CustomListItems>
                <ListItemText sx={left} primary="Tenure"  />
                <ListItemText sx={right} secondary={d.shareable.tenure} />
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





  ResidentialInfoCard.propTypes = {
  data: PropTypes.object,
}
export default ResidentialInfoCard
