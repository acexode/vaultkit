import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-circle-fill';

import Dialog from '@mui/material/Dialog';
import { styled, IconButton } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

AlertDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  maxWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  showClose: PropTypes.bool,
  component: PropTypes.node,
  handleClose: PropTypes.func,
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    paddingTop: '5px',
  },
  '& .MuiDialogActions-root': {
    padding: '5px',
  },
}));
export default function AlertDialog({title, component, open, fullWidth= false, maxWidth="md", handleClose, showClose= true}) {
  // const [open, setOpen] = React.useState(false);


  return (
    <BootstrapDialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {showClose && 
         <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 2,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Icon width={40} icon={closeFill} />
        </IconButton>
        
        }
        <DialogContent sx={{padding: '10px', '&::-webkit-scrollbar': {display: 'none'}}}>
            {component}
        </DialogContent>
  
      </BootstrapDialog>
  );
}
