import { isString } from 'lodash';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { Box, Paper, alpha, styled, Typography } from '@mui/material';

// import { fData } from 'src/utils/format-number';

import { useCallback } from 'react';

import UploadIllustration from 'src/assets/illustration_upload';
// material

// utils

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 0),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': {
    opacity: 0.72,
    cursor: 'pointer',
  },
  [theme.breakpoints.up('md')]: { textAlign: 'left', flexDirection: 'row' },
}));

// ----------------------------------------------------------------------

UploadSingleFile.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  setFieldValue: PropTypes.func,
  name: PropTypes.string,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
};


const ShowRejectionItems = ({ fileRejections }) => (
  <Paper
    variant="outlined"
    sx={{
      py: 1,
      px: 2,
      mt: 3,
      borderColor: 'error.light',
      bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
    }}
  >
    {fileRejections.map(({ file, errors }) => {
      const { path,  } = file;
      return (
        <>
        {file && 
           <Box key={path} sx={{ my: 1 }}>
           {/* <Typography variant="subtitle2" noWrap>
             {path} - {fData(size)}
           </Typography> */}
           {errors.map((e) => (
             <Typography key={e.code} variant="caption" component="p">
               - {e.message}
             </Typography>
           ))}
         </Box>
        }
        
        </>
       
      );
    })}
  </Paper>
);

ShowRejectionItems.propTypes = {

  fileRejections: PropTypes.array,
};
export default function UploadSingleFile({ error, file, sx, label, setFieldValue, name,  ...other }) {
  const onDrop = useCallback(acceptedFiles => {
    setFieldValue(name, acceptedFiles[0])
    console.log(acceptedFiles)
  }, [setFieldValue, name])
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    onDrop,
  });

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
          ...(file && { padding: '12% 0' }),
        }}
      >
        <input {...getInputProps()} />

        <UploadIllustration sx={{ width: 220 }} />

        <Box sx={{ p: 3, ml: { md: 2 } }}>
          <Typography gutterBottom variant="h5">
            Drop or Select {label}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Drop files here or click&nbsp;
            <Typography
              variant="body2"
              component="span"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              browse
            </Typography>
            &nbsp;thorough your machine
          </Typography>
        </Box>

        {isString(file) && file.length  && (
          <Box
            component="img"
            alt="file preview"
            src={file}
            sx={{
              top: 8,
              borderRadius: 1,
              objectFit: 'cover',
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
            }}
          />
        )}
        {isString(file?.url) && (
          <Box
            component="img"
            alt="file preview"
            src={ file?.url}
            sx={{
              top: 8,
              borderRadius: 1,
              // objectFit: 'cover',
              position: 'absolute',
              // width: 'calc(100% - 16px)',
              // height: 'calc(100% - 16px)',
            }}
          />
        )}
      </DropZoneStyle>
        { isString(file?.url) &&<Typography color="primary" variant='caption'  pt={1}>Click on image to change it</Typography>}

      {fileRejections.length > 0 && <ShowRejectionItems fileRejections={fileRejections} />}
    </Box>
  );
}
