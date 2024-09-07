import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import editFill from '@iconify/icons-eva/edit-2-fill';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Tooltip,
  IconButton,
  CardActions,

  ListItemText,
} from '@mui/material';

import FinanceCardContent from './FinanceCardContent';



const Item = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  gap: '24px',
  width: '100%',
  textAlign: 'left',
  boxSizing: 'border-box',
}));

const NewButton = styled(IconButton)(({ theme, width, height }) => ({
  borderRadius: '50%',
  height,
  width,
  backgroundColor: theme.palette.background.neutral,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

const FinInformationCard = ({data, title, handleCurrentForm, handleViewDataModal, redirect, path, fin_info_id}) => {
console.log(data);
  return (
    <Card key={data.id}
  sx={{
    p: 2,
    width: 1,
    maxWidth: 520,
    height: 'auto',
    mt: 2,
  }}
>
  <Stack sx={{ mb: 1 }}>
    <Box sx={{ mb: 3 }}>
      <Item>
        <ListItemText sx={{ minWidth: '84px' }}>{title}</ListItemText>
        <ListItemText sx={{ textAlign: 'right', pr: 2 }}>
          <Tooltip title="Edit Info">
            <NewButton
              width={40}
              height={40}
              edge="end"
              variant="contained"
              size="medium"
              onClick={() => handleCurrentForm(path, data?.id, redirect, fin_info_id)}
            >
              <Icon width={40} icon={editFill} />
            </NewButton>
          </Tooltip>
        </ListItemText>
      </Item>
    </Box>
    {Object.keys(data)
      .filter(e => !['id', 'user_id'].includes(e))
      .slice(0, 3)
      .map((e, i) => (
        <FinanceCardContent key={i.toString()} field={e} data={data} />
      ))}
  </Stack>
  <CardActions disableSpacing>
    <Button
      edge="end"
      variant="outlined"
      size="medium"
      color="inherit"
      onClick={() => handleViewDataModal(data)}
      startIcon={<Icon icon={eyeFill} />}
    >
      View full data
    </Button>
  </CardActions>
</Card>
  )

};

FinInformationCard.propTypes = {
  data: PropTypes.object,
  handleCurrentForm: PropTypes.func,
  handleViewDataModal: PropTypes.func,
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
  fin_info_id: PropTypes.string.isRequired,
  redirect: PropTypes.number.isRequired,
};
export default FinInformationCard;
