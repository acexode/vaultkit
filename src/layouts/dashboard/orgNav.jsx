import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';


// import { account } from 'src/_mock/account';

import useAuth from 'src/hooks/useAuth';

import Logo from 'src/components/logo';

import navConfig, { OrganizationNavConfig } from './config-navigation';

// ----------------------------------------------------------------------

export default function OrgNav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const { user } = useAuth();

  const [navArray, setnavArray] = useState([]);



  useEffect(() => {
    if (user?.business_type) {
      setnavArray(OrganizationNavConfig);
    } else {
      setnavArray(navConfig);
    }
  }, [user]);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  

  return (
    <Stack direction="row" component="nav" spacing={4} sx={{ px: 2 }}>
      <Logo sx={{  ml: 5, height: '60px' }} />
      {navArray.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );
}

OrgNav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 36,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
