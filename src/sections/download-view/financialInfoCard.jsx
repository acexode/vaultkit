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





export  const FinancialInfoCard = ({data}) => {
    console.log(data);
  return (
    <Grid item mb={3} xs={12} md={12} lg={12}>
    <Card className="profile-box" sx={{ flexGrow: 1 }}>
    <CardContent>
    <Typography
            variant="h4"
            sx={{ color: '#212529', fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}
          >
            Financial  Information
          </Typography>
    </CardContent>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Annual Income</TableCell>
            <TableCell align="right">Credit Score</TableCell>
            <TableCell align="right">Source of income</TableCell>
            <TableCell align="right">Credit History</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {data.annual_income}
              </TableCell>
              <TableCell align="right">{data.credit_score}</TableCell>
              <TableCell align="right">{data.source_of_income || 'NA'}</TableCell>
              <TableCell align="right">{data.credit_history}</TableCell>
             
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </Grid>
  );
}

FinancialInfoCard.propTypes = {
    data: PropTypes.object,
  }

export default FinancialInfoCard
