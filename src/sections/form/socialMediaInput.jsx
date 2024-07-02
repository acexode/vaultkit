import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from '@iconify/icons-eva/twitter-outline';
import FacebookIcon from '@iconify/icons-eva/facebook-outline';
import LinkedInIcon from '@iconify/icons-eva/linkedin-outline';
// import InstagramIcon from '@mui/icons-material/Instagram';

import { Grid, TextField, InputAdornment } from '@mui/material';

import Iconify from 'src/components/iconify';

const SocialMediaInput = ({ values, handleChange, touched, errors }) => {
  console.log(values);
  return (
    <Grid container  mt={1}>
      <Grid mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.instagram"
          label="Instagram"
          fullWidth
          value={values.social_media_links.instagram}
          onChange={handleChange}
          error={touched.socialMedia?.instagram && Boolean(errors.socialMedia?.instagram)}
          helperText={touched.socialMedia?.instagram && errors.socialMedia?.instagram}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify  icon="mdi:instagram" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid  mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.facebook"
          label="Facebook"
          fullWidth
          value={values.social_media_links.facebook}
          onChange={handleChange}
          error={touched.socialMedia?.facebook && Boolean(errors.socialMedia?.facebook)}
          helperText={touched.socialMedia?.facebook && errors.socialMedia?.facebook}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify  icon={FacebookIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid  mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.twitter"
          label="X"
          fullWidth
          value={values.social_media_links.twitter}
          onChange={handleChange}
          error={touched.socialMedia?.twitter && Boolean(errors.socialMedia?.twitter)}
          helperText={touched.socialMedia?.twitter && errors.socialMedia?.twitter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={TwitterIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid  mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.linkedin"
          label="LinkedIn"
          fullWidth
          value={values.social_media_links.linkedin}
          onChange={handleChange}
          error={touched.socialMedia?.linkedin && Boolean(errors.socialMedia?.linkedin)}
          helperText={touched.socialMedia?.linkedin && errors.socialMedia?.linkedin}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={LinkedInIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};
SocialMediaInput.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
export default SocialMediaInput;
