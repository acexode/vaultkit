import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from '@iconify/icons-eva/twitter-outline';
import FacebookIcon from '@iconify/icons-eva/facebook-outline';
import LinkedInIcon from '@iconify/icons-eva/linkedin-outline';
// import InstagramIcon from '@mui/icons-material/Instagram';

import { Grid, TextField, InputAdornment } from '@mui/material';

import Iconify from 'src/components/iconify';

const SocialMediaInput = ({ values = {}, handleChange, touched = {}, errors = {} }) => {
  const socialMediaLinks = values.social_media_links || {}; // Ensure it's always an object

  return (
    <Grid container mt={1}>
      <Grid mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.instagram"
          label="Instagram"
          fullWidth
          value={socialMediaLinks.instagram || ''}
          onChange={handleChange}
          error={touched.social_media_links?.instagram && Boolean(errors.social_media_links?.instagram)}
          helperText={touched.social_media_links?.instagram && errors.social_media_links?.instagram}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="mdi:instagram" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.facebook"
          label="Facebook"
          fullWidth
          value={socialMediaLinks.facebook || ''}
          onChange={handleChange}
          error={touched.social_media_links?.facebook && Boolean(errors.social_media_links?.facebook)}
          helperText={touched.social_media_links?.facebook && errors.social_media_links?.facebook}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={FacebookIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.twitter"
          label="X"
          fullWidth
          value={socialMediaLinks.twitter || ''}
          onChange={handleChange}
          error={touched.social_media_links?.twitter && Boolean(errors.social_media_links?.twitter)}
          helperText={touched.social_media_links?.twitter && errors.social_media_links?.twitter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={TwitterIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid mb={3} xs={12} md={5} lg={5} mx={2}>
        <TextField
          name="social_media_links.linkedin"
          label="LinkedIn"
          fullWidth
          value={socialMediaLinks.linkedin || ''}
          onChange={handleChange}
          error={touched.social_media_links?.linkedin && Boolean(errors.social_media_links?.linkedin)}
          helperText={touched.social_media_links?.linkedin && errors.social_media_links?.linkedin}
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
