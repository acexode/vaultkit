import { Link as ScrollLink } from 'react-scroll';
import { Outlet, useLocation } from 'react-router-dom';

// material
import { Box, Link, Container, Typography } from '@mui/material';

import Logo from 'src/components/logo';

//
import Header from './Header';
import MainFooter from './Footer';
// components

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default'
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="/">Vault Kit</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
