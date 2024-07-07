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

export default function CommonTableRow({
  selected,
  name,
  company,
  role,
  validity,
  status,
  handleClick,
  handleAddNoteModal,
  notificationCount
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const addNoteMenu = () => {
    setOpen(null);
    handleAddNoteModal(true)
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
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{company}</TableCell>

        <TableCell>{role}</TableCell>

        <TableCell align="center">{validity }</TableCell>

        <TableCell>
          <Label color={(status === 'expired' && 'error') || 'success'}>{status}</Label>
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
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:eye-outline" sx={{ mr: 2 }} />
          View
        </MenuItem>
        <MenuItem onClick={addNoteMenu}>
          <Iconify icon="eva:file-outline" sx={{ mr: 2 }} />
          Add Note
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Revoke
        </MenuItem>
      </Popover>

    </>
  );
}

CommonTableRow.propTypes = {
  company: PropTypes.any,
  handleClick: PropTypes.func,
  handleAddNoteModal: PropTypes.func,
  name: PropTypes.any,
  notificationCount: PropTypes.number,
  validity: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
