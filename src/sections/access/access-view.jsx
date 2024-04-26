// import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import { Box, Button, MenuItem, Container } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import Iconify from 'src/components/iconify';


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
AccessView.propTypes = {
  handleClose: PropTypes.func,
};
export default function AccessView({handleClose}) {
  const theme = useTheme();

  const router = useRouter();



  const handleClick = () => {
    router.push('/otp');
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Access Code Name" />
        <TextField 
        name="duration"
        select
        label="Access Code Validity"
        helperText="Do you want anyone to view this code?"
        >
        {validityOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}

        </TextField>
         
        <TextField name="email" label="Enter Guest Email" helperText="Do you want anyone to view this code?" />

      </Stack>

      
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
        <Button onClick={handleClose} variant="outlined" fullWidth color="secondary" size="large" sx={{marginRight: '10px'}}>
          Cancel
        </Button>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Share
      </LoadingButton>
      </Stack>

    </>
  );

  return (
    <Container>
      

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 1,
            width: 1,
            maxWidth: 620,
          }}
        >
          <Typography variant="h4" sx={{textAlign: 'center'}}>Share your access code</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
          Send this code to anyone you would like to have access to your profile. Be sure who you grant permission.
          </Typography>

          <Stack direction="row" justifyContent="center" mb={3} spacing={2}>
            <Box
             
              sx={{ background: alpha(theme.palette.grey[500], 0.16), border: 'none', padding: '14px 3rem' }}
            >
             wXydhZ <Iconify icon="eva:copy" color="#DF3E30" />
            </Box>

            

           
          </Stack>

        

          {renderForm}
        </Card>
      </Stack>
    </Container>
  );
}
