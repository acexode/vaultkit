// import { useState } from 'react';
import PropTypes from 'prop-types';

// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Box, MenuItem, Checkbox, FormControlLabel } from '@mui/material';



// ----------------------------------------------------------------------
const validityOptions = [
  {
    value: '30m',
    label: '30 Minutes'
  },
  {
    value: '1hr',
    label: '1 Hour'
  },
  {
    value: '3hr',
    label: '3 Hours'
  },
  {
    value: '6hr',
    label: '6 Hours'
  },
  {
    value: '12hr',
    label: '12 Hours'
  },
  {
    value: '24hr',
    label: '1 day'
  }
]
DataConfigView.propTypes = {
  handleClose: PropTypes.func,
};
export default function DataConfigView({handleClose}) {



  const renderForm = (
    <Stack spacing={3}>
        <TextField 
        name="duration"
        select
        label="Access duration"
        helperText="Specify the authorized access period for the recipient to view your personal information"
        >
        {validityOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}

        </TextField>
         
        <TextField name="email" label="Enter Receipient Email"  />
        <FormControlLabel   control={<Checkbox />} label={<Typography sx={{fontSize: '12px'}}>Can the recipient download your information ?</Typography>} />
    </Stack>
  );

  return (
    <Box px={2}>
      

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        
          <Typography variant="h4" sx={{textAlign: 'center', my:2 }}>Data Sharing Settings</Typography>

          {renderForm}
        
      </Stack>
    </Box>
  );
}
