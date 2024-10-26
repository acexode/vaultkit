import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useResponsive } from 'src/hooks/use-responsive';

import Nav from './nav';
import Main from './main';
import OrgHeader from './org-header';

// ----------------------------------------------------------------------

export default function OrgDashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const mdDown = useResponsive('down', 'md');
  return (
    <>
      <OrgHeader openNav={openNav} onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        {mdDown && <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />}
        <Main>{children}</Main>
      </Box>
    </>
  );
}

OrgDashboardLayout.propTypes = {
  children: PropTypes.node,
};
