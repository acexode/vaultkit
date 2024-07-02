import React from 'react';
import PropTypes from 'prop-types';

// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextField,  } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaInput = ({ values, handleChange, touched, errors }) => (
  <div>
    <TextField
      name="socialMedia.instagram"
      label="Instagram"
      fullWidth
      value={values.socialMedia.instagram}
      onChange={handleChange}
      error={touched.socialMedia?.instagram && Boolean(errors.socialMedia?.instagram)}
      helperText={touched.socialMedia?.instagram && errors.socialMedia?.instagram}
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <InstagramIcon />
      //     </InputAdornment>
      //   ),
      // }}
    />
    <TextField
      name="socialMedia.facebook"
      label="Facebook"
      fullWidth
      value={values.socialMedia.facebook}
      onChange={handleChange}
      error={touched.socialMedia?.facebook && Boolean(errors.socialMedia?.facebook)}
      helperText={touched.socialMedia?.facebook && errors.socialMedia?.facebook}
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <FacebookIcon />
      //     </InputAdornment>
      //   ),
      // }}
    />
    <TextField
      name="socialMedia.twitter"
      label="X"
      fullWidth
      value={values.socialMedia.twitter}
      onChange={handleChange}
      error={touched.socialMedia?.twitter && Boolean(errors.socialMedia?.twitter)}
      helperText={touched.socialMedia?.twitter && errors.socialMedia?.twitter}
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <TwitterIcon />
      //     </InputAdornment>
      //   ),
      // }}
    />
    <TextField
      name="socialMedia.linkedin"
      label="LinkedIn"
      fullWidth
      value={values.socialMedia.linkedin}
      onChange={handleChange}
      error={touched.socialMedia?.linkedin && Boolean(errors.socialMedia?.linkedin)}
      helperText={touched.socialMedia?.linkedin && errors.socialMedia?.linkedin}
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <LinkedInIcon />
      //     </InputAdornment>
      //   ),
      // }}
    />
  </div>
);
SocialMediaInput.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
export default SocialMediaInput;
