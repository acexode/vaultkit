import PropTypes from 'prop-types';
// material

import { Box, styled, Typography } from '@mui/material';

 import emptySvg from '../../assets/illustration_empty_content.svg'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3, 2)
}));

// ----------------------------------------------------------------------

EmptyContent.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string
};

export default function EmptyContent({ title, description, img, ...other }) {
  return (
    <RootStyle {...other}>
      <Box
        component="img"
        alt="empty content"
        src={img || emptySvg}
        sx={{ height: 230, mb: 3 }}
      />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}
