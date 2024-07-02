import React from 'react';

import { Grid, Paper, Container, Typography } from '@mui/material';

const benefits = [
  'Secure Data Management',
  'Easy Verification Process',
  'Customizable Sharing Options',
  'Real-Time Data Requests',
  'Enhanced Privacy Control'
];

const Benefits = () => (
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Benefits
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6">{benefit}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

export default Benefits;
