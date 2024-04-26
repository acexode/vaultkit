import * as React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

AlertDialog.propTypes = {
  title: PropTypes.number,
  open: PropTypes.number,
  component: PropTypes.node,
};
export default function AlertDialog({title, component, open}) {
  // const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    console.log(false);
  };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            {component}
        </DialogContent>
      </Dialog>
  );
}
