import React from 'react';

import { Grid, Container, Typography } from '@mui/material';
import { Info, Work, Home, School, ContactMail, AccountBalance } from '@mui/icons-material';

const features = [
  { icon: <Info />, title: 'Personal Info', description: 'Manage and verify your personal details' },
  { icon: <ContactMail />, title: 'Contact Info', description: 'Store and share your contact information' },
  { icon: <School />, title: 'Educational Background', description: 'Keep your education history updated' },
  { icon: <Work />, title: 'Employment Info', description: 'Track your employment history' },
  { icon: <AccountBalance />, title: 'Financial Info', description: 'Securely share financial data' },
  { icon: <Home />, title: 'Residential Histories', description: 'Record and manage your residential history' }
];

const Features = () => (
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div style={{ textAlign: 'center' }}>
              {feature.icon}
              <Typography variant="h6">{feature.title}</Typography>
              <Typography>{feature.description}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

export default Features;
