import * as React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

AlertDialog.propTypes = {
  title: PropTypes.number,
  open: PropTypes.number,
  maxWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  component: PropTypes.node,
};
export default function AlertDialog({title, component, open, fullWidth= false, maxWidth="md"}) {
  // const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    console.log(false);
  };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            {component}
        </DialogContent>
  
      </Dialog>
  );
}
