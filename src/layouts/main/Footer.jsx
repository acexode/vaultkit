import React from 'react';

import { Link, Container, Typography } from '@mui/material';

const Footer = () => (
    <Container style={{ marginTop: '50px', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} VaultKit. All rights reserved.
      </Typography>
      <Link href="#" variant="body2" style={{ margin: '0 10px' }}>
        Privacy Policy
      </Link>
      <Link href="#" variant="body2" style={{ margin: '0 10px' }}>
        Terms of Service
      </Link>
      <Link href="#" variant="body2" style={{ margin: '0 10px' }}>
        Contact
      </Link>
    </Container>
  );

export default Footer;
