import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import EmptyContent from 'src/components/common/EmptyContent';

// ----------------------------------------------------------------------

export default function TableNoData({ query }) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
        {query ? 
        <Paper
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" paragraph>
            Not found
          </Typography>

          

          <Typography variant="body2">
            No results found for &nbsp;
            <strong>&quot;{query}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Typography>
        </Paper>:
        <Paper
        sx={{
          textAlign: 'center',
        }}
      >
        <EmptyContent />
         <Typography variant="h6" paragraph>
           Employees not found
          </Typography>
      </Paper>
        
      }
      </TableCell>
    </TableRow>
  );
}

TableNoData.propTypes = {
  query: PropTypes.string,
};
