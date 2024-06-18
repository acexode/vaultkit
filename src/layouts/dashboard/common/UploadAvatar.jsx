import { isString } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useDropzone } from 'react-dropzone';
import roundAddAPhoto from '@iconify/icons-eva/camera-outline';
// material

import { Box, Paper, alpha, styled, Typography } from '@mui/material';
// utils


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  width: 144,
  height: 144,
  margin: 'auto',
  borderRadius: '50%',
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`
}));

const DropZoneStyle = styled('div')({
  zIndex: 0,
  width: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { width: '100%', height: '100%' },
  '&:hover': {
    cursor: 'pointer',
    '& .placeholder': {
      zIndex: 9
    }
  }
});

const PlaceholderStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&:hover': { opacity: 0.72 }
}));

// ----------------------------------------------------------------------

UploadAvatar.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  caption: PropTypes.node,
  sx: PropTypes.object
};

const ShowRejectionItems = ({fileRejections}) => (
  <Paper
    variant="outlined"
    sx={{
      py: 1,
      px: 2,
      my: 2,
      borderColor: 'error.light',
      bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
    }}
  >
    {fileRejections.map(({ file, errors }) => {
      const { path } = file;
      return (
        <Box key={path} sx={{ my: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {path}
          </Typography>
          {errors.map((e) => (
            <Typography key={e.code} variant="caption" component="p">
              - {e.message}
            </Typography>
          ))}
        </Box>
      );
    })}
  </Paper>
);
export default function UploadAvatar({ error, file, caption, sx, ...other }) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other
  });



  return (
    <>
      <RootStyle sx={sx}>
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: 'error.main',
              borderColor: 'error.light',
              bgcolor: 'error.lighter'
            })
          }}
        >
          <input {...getInputProps()} />

          {file && (
            <Box
              component="img"
              alt="avatar"
              src={isString(file) ? file : file.preview}
              sx={{ zIndex: 8, objectFit: 'cover' }}
            />
          )}

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(file && {
                opacity: 0,
                color: 'common.white',
                bgcolor: 'grey.900',
                '&:hover': { opacity: 0.72 }
              })
            }}
          >
            <Box component={Icon} icon={roundAddAPhoto} sx={{ width: 24, height: 24, mb: 1 }} />
            <Typography variant="caption">{file ? 'Update photo' : 'Upload photo'}</Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {caption}

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </>
  );
}
ShowRejectionItems.propTypes = {
  fileRejections: PropTypes.array
};
