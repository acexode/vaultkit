import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/plus-circle-outline';

import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Grid, IconButton, Typography } from '@mui/material';

const NewButton = styled(IconButton)(({ theme, width, height }) => ({
  borderRadius: '50%',
  height,
  width,
  backgroundColor: theme.palette.background.neutral,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

const AddFinanceCard = ({ handleCurrentForm,  redirect, fintype }) => {
  console.log('add card');
  return (
    <Grid container alignItems="stretch" justifyContent="space-around">
      <Card
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          maxWidth: 520,
          height: '280px',
          mt: 5,
        }}
      >
        <NewButton
          width={80}
          height={80}
          edge="end"
          variant="contained"
          size="medium"
          onClick={() => handleCurrentForm(fintype.path, null, redirect)}
        >
          <Icon width={40} icon={closeFill} />
        </NewButton>
        <Typography pt={2}> Add {fintype.title}</Typography>
      </Card>
    </Grid>
  );
};
AddFinanceCard.propTypes = {
  handleCurrentForm: PropTypes.func,
  redirect: PropTypes.number.isRequired,
  fintype: PropTypes.string.isRequired,
};
export default AddFinanceCard;
