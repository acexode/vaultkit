import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/plus-circle-outline';

import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {
  IconButton,
} from '@mui/material';

const NewButton = styled(IconButton)(({ theme, width, height }) => ({
  borderRadius: '50%',
  height,
  width,
  backgroundColor: theme.palette.background.neutral,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

const AddDataCard = ({handleCurrentForm, path}) => (
    <Card
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          maxWidth: 520,
          height: '380px',
          mt: 2,
        }}
      >
        <NewButton
             width={80}
             height={80}
          edge="end"
          variant="contained"
          size="medium"
          onClick={() => handleCurrentForm(path, false)}
        >
          <Icon width={40} icon={closeFill} />
        </NewButton>
      </Card>
  )
  AddDataCard.propTypes = {
    handleCurrentForm: PropTypes.func,
    path: PropTypes.string.isRequired,
  };
export default AddDataCard
