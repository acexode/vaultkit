// import { useState } from 'react';
import PropTypes from 'prop-types';

// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Box, Checkbox, FormControlLabel } from '@mui/material';



// ----------------------------------------------------------------------
// const validityOptions = [
//   {
//     value: '30m',
//     label: '30 Minutes'
//   },
//   {
//     value: '1hr',
//     label: '1 Hour'
//   },
//   {
//     value: '3hr',
//     label: '3 Hours'
//   },
//   {
//     value: '6hr',
//     label: '6 Hours'
//   },
//   {
//     value: '12hr',
//     label: '12 Hours'
//   },
//   {
//     value: '24hr',
//     label: '1 day'
//   }
// ]
DataConfigView.propTypes = {
  handleClose: PropTypes.func,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  formik: PropTypes.any.isRequired,

};
export default function DataConfigView({handleClose, values, setFieldValue, formik}) {


  const renderForm = (
    <Stack spacing={3} sx={{width: "70%"}}>
         {/* <TextField 
          name="duration"
          select
          label="Access duration"
          value={values.duration || ''}
          onChange={(e) => setFieldValue('duration', e.target.value)}
          helperText="Specify the authorized access period for the recipient to view your personal information"
        >
          {validityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
          <TextField 
          name="title"
          label="Title"
          value={values.title || ''}
          onChange={(e) => setFieldValue('title', e.target.value)}
         
        />
         <TextField 
          name="receiver_email"
          label="Enter Recipient Email"
          value={values.receiver_email || ''}
          onChange={(e) => setFieldValue('receiver_email', e.target.value)}
        />
        <TextField
          sx={{ mt: 0 }}
          name="start_time"
          label="Start time"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={values.start_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.start_time && Boolean(formik.errors.start_time)}
          helperText={formik.touched.start_time && formik.errors.start_time}
        />
        <TextField
          sx={{ mt: 0 }}
          name="end_time"
          label="End time"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={values.end_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.end_time && Boolean(formik.errors.end_time)}
          helperText={formik.touched.end_time && formik.errors.end_time}
        />
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
