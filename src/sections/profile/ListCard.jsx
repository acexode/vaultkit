import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import editFill from '@iconify/icons-eva/edit-2-fill';
import closeFill from '@iconify/icons-eva/plus-circle-outline';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Button,
  Tooltip,
  Typography,
  IconButton,
  CardActions,
  ListItemText,
} from '@mui/material';

const ListItemRoot = styled('div')(({ theme }) => ({
  display: 'block',
  borderRadius: '8px',
  alignItems: 'center',
  marginBottom: ' 12px',
  padding: '12px 16px',
  outlineOffset: '-1px',
  outline: 'rgb(242, 242, 242) solid 1px',
  wordBreak: 'break-word',
  backgroundColor: 'rgb(250, 250, 250)',
}));
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

const ListCard = ({ data, handleCurrentForm, path, title }) => {
  function convertToSentenceCase(str) {
    str = str.replace(/_/g, ' ');

    // Convert to sentence case
    console.log(
      str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase())
    );
    return str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase());
  }
  return (
    <Grid container alignItems="stretch" justifyContent="space-around">
      {data.map((d) => (
        <Card
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
                <ListItemText sx={{ textAlign: 'right', pr:2 }}>
                <Tooltip title="Edit Info">
                  <NewButton
                    width={40}
                    height={40}
                    edge="end"
                    variant="contained"
                    size="medium"
                    onClick={() => handleCurrentForm(path)}
                  >
                    <Icon width={40} icon={editFill} />
                  </NewButton>
                </Tooltip>
                </ListItemText>
              </Item>
            </Box>
            {Object.keys(d)
              .slice(0, 3)
              .map((e) => (
                <ListItemRoot>
                  <Item>
                    <ListItemText sx={{ minWidth: '84px' }}>
                      {convertToSentenceCase(e)}
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'right' }}>
                      <Typography sx={{ fontWeight: '700' }}>{d[e]}</Typography>
                    </ListItemText>
                  </Item>
                </ListItemRoot>
              ))}
          </Stack>
          <CardActions disableSpacing>
            <Button
              edge="end"
              variant="contained"
              size="medium"
              color="inherit"
              onClick={() => handleCurrentForm(path)}
              startIcon={<Icon icon={eyeFill} />}
            >
              Show full data
            </Button>
          </CardActions>
        </Card>
      ))}
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
          onClick={() => handleCurrentForm(path)}
        >
          <Icon width={40} icon={closeFill} />
        </NewButton>
      </Card>
    </Grid>
  );
};

ListCard.propTypes = {
  data: PropTypes.object,
  handleCurrentForm: PropTypes.func,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListCard;
