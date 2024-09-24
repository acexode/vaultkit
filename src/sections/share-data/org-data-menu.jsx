import * as React from 'react';
import PropTypes from 'prop-types';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

import { ShareDataModal, RequestDataModal } from '../profile/view/constant';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
    // ...theme.applyStyles('dark', {
    //   color: theme.palette.grey[300],
    // }),
  },
}));

OrgDataMenu.propTypes = {
  openDialog: PropTypes.func,
};

export default function OrgDataMenu({ openDialog }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type = null) => {
    setAnchorEl(null);
    if (type) {
      openDialog(type);
    }
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        color='inherit'
        disableElevation
        onClick={handleClick}
        sx={{margin: '0 1rem',}}
        endIcon={<Iconify icon="ic:twotone-arrow-drop-down" sx />}
      >
        Request & Share Data
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(ShareDataModal)} disableRipple>
          <Iconify icon="eva:share-fill" sx={{marginRight: '.5rem'}} />
          Share Data
        </MenuItem>
        <MenuItem onClick={() => handleClose(RequestDataModal)} disableRipple>
          <Iconify icon="eva:plus-fill" sx={{marginRight: '.5rem'}} />
          Request Data
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
