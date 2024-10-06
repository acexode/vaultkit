import { isString } from 'lodash';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { Box, List, Paper, alpha, styled, ListItem, Typography } from '@mui/material';

// import { fData } from 'src/utils/format-number';

// import fileFill from '@iconify/icons-eva/file-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

// import { fData } from 'src/utils/format-number';

import { isImage, fileIcon } from 'src/utils/utils';

import UploadIllustration from 'src/assets/illustration_upload';

import Iconify from '../iconify';
import MIconButton from '../common/MIconButton';
import { varFadeInRight } from '../common/animate/variants/actions';

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
  const [rFile, setrFile] = useState(null)
  const onDrop = useCallback(acceptedFiles => {
    setFieldValue(name, acceptedFiles[0])
  }, [setFieldValue, name])
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/msword": [".doc"],
    },
    onDrop,
  });
  useEffect(() => {
   if(file){
    setrFile({...file, preview: file.url ? file.url : handleCreateObjectUrl(file) })
   }
  }, [file])

  const handleCreateObjectUrl = (fileObj) =>{
    if(fileObj && fileObj.path){

      return URL.createObjectURL(fileObj)
    }
    return null
  }


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
      </DropZoneStyle>
        { isString(file?.url) &&<Typography color="primary" variant='caption'  pt={1}>Click on image to change it</Typography>}

      {fileRejections.length > 0 && <ShowRejectionItems fileRejections={fileRejections} />}
     {file &&  <List disablePadding sx={{  my: 3  }}>
        <AnimatePresence>
                <ListItem
                 
                  component={motion.div}
                  {...varFadeInRight}
                  sx={{
                    p: 0,
                    m: 0.5,
                    width: 80,
                    height: 80,
                    borderRadius: 1.5,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'inline-flex'
                  }}
                >
                  {isString(file) ? 
                  
                  <Paper
                    variant="outlined"
                    component="img"
                    src={isString(file) ? file : rFile?.preview}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                  /> : 
                    <Paper
                    variant="outlined"
                    component="img"
                    src={ isImage(rFile?.path) ? rFile?.preview: fileIcon(rFile?.path)}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                  />
                }
                  <Box sx={{ top: 6, right: 6, position: 'absolute' }}>
                    <MIconButton
                      size="small"
                      onClick={() => setFieldValue(name, null)}
                      sx={{
                        p: '2px',
                        color: 'common.white',
                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                        '&:hover': {
                          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48)
                        }
                      }}
                    >
                      <Iconify icon={closeFill} sx={{color: '#fff'}} />
                    </MIconButton>
                  </Box>
                </ListItem>

        </AnimatePresence>
      </List>}
    </Box>
  );
}
