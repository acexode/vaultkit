import axios from 'axios';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'src/routes/hooks';

import useAuth from 'src/hooks/useAuth';

import { account } from 'src/_mock/account';
import { serverBaseUrl } from 'src/configs/endpoints';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    path: '/'
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    path: '/dashboard/user'
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    path: '/dashboard/settings'
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const router = useRouter()
  const {user} = useAuth();
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (path) => {
    setOpen(null);
    router.push(path)
  };
  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem('authToken').split(" ")[1];
      const response = await axios.delete(`${serverBaseUrl}/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if(response?.data.status === 200){
        sessionStorage.removeItem("authToken")
        router.push('/login')
      }else {
        throw new Error(`Unexpected response status: ${response?.status}`);
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.error('Server error. Please try again later.');
      } else {
        console.error(`Unexpected response status: ${error.response.status}`);
      }
      console.log('Error fetching contact data:', error.response);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={user?.basic?.first_name}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {user.basic && user?.basic?.first_name?.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.basic?.first_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={() =>handleClose(option.path)}>
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
