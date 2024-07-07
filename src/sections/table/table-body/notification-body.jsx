import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

export default function NotificationBody({ selected, title, description, time, handleClick }) {
console.log(time);

  return (
    <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <Avatar alt={name} src={avatarUrl} /> */}
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{description}</TableCell>

        <TableCell>{time}</TableCell>
      </TableRow>
  );
}

NotificationBody.propTypes = {
  title: PropTypes.any,
  handleClick: PropTypes.func,
  description: PropTypes.any,
  time: PropTypes.any,
  selected: PropTypes.any,
};
