import { useState } from 'react';
import PropTypes from 'prop-types';

import { Badge } from '@mui/material';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function OrganizationTRows({
  selected,
  name,
  company,
  email,
  validity,
  status,
  handleClick,
  handleRequestData,
  notificationCount,
  handleViewDetails,
  userId
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const requestData = () => {
    setOpen(null);
    handleRequestData(true)
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <Avatar alt={name} src={avatarUrl} /> */}
            <Typography variant="subname2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{email}</TableCell>




        <TableCell>
        <Label 
            color={
              (status === 'expired' && 'error') || 
              (status === 'approved' && 'success') || 
              (status === 'pending' && 'warning') || 
              'default'
            }
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
          <Badge badgeContent={notificationCount} color="primary">
            <Iconify icon="eva:more-vertical-fill" />
            </Badge>
          </IconButton>
        </TableCell>
      </TableRow>
      

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 150 },
        }}
      >
        <MenuItem onClick={()=> handleViewDetails(userId)}>
          <Iconify icon="eva:eye-outline" sx={{ mr: 2 }} />
          View
        </MenuItem>
        <MenuItem onClick={requestData}>
          <Iconify icon="eva:file-outline" sx={{ mr: 1 }} />
          Request Data
        </MenuItem>
      </Popover>

    </>
  );
}

OrganizationTRows.propTypes = {
  company: PropTypes.any,
  handleClick: PropTypes.func,
  handleViewDetails: PropTypes.func,
  handleRequestData: PropTypes.func,
  userId: PropTypes.string,
  name: PropTypes.any,
  notificationCount: PropTypes.number,
  validity: PropTypes.any,
  email: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
