import * as React from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { Card, Grid, Typography, CardContent } from '@mui/material';

import { finColumns, filterFinanceFields } from 'src/utils/download-utils';

import { toSentenceCase, toSentenceCaseKey } from '../user/utils';




const FinInfoCard = ({data, title, name}) => {
    const columns = finColumns[name].map(e => toSentenceCase(e))
    const filtered = filterFinanceFields(data, finColumns[name])
    console.log(filtered);
    const values = filtered.map(f => Object.values(f))
  return (
    <Grid item mb={3} xs={12} md={12} lg={12}>
    <Card className="profile-box" sx={{ flexGrow: 1 }}>
    <CardContent>
    <Typography variant="h6" component="div" mb={3}>
            {title}  Information
          </Typography>
    </CardContent>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(e =>(
                <TableCell>{toSentenceCaseKey(e)}</TableCell>

            ))}
           
        
          </TableRow>
        </TableHead>
        <TableBody>
            {values.map(e => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
               {e.map(i => (

              <TableCell component="th" scope="row">
                {toSentenceCase(i)}
              </TableCell>
               ))}

            </TableRow>
))}
         
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </Grid>
  );
}

FinInfoCard.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    name: PropTypes.string,
  }

export default FinInfoCard

