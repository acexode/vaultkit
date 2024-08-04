import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import editFill from '@iconify/icons-eva/edit-2-fill';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Button,
  Tooltip,
  IconButton,
  CardActions,
  ButtonGroup,
  ListItemText,
} from '@mui/material';

import AlertDialog from '../../modal/modal';
import AddFinanceCard from './AddFinanceCard';
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

const FinanceCard = ({ data, handleCurrentForm, path, title, redirect }) => {
    const Cards = [{title: 'Bank Details', path: 'fin-bank-details'}, {title: 'Liability Info', path: 'fin-liability-info'}, {title: 'Assets', path: 'fin-assets'}, {title: 'Insurance Info', path: 'fin-insurance-info'}, {title: 'Investment Info', path: 'fin-investment-info'}]
  
    const [open, setopen] = useState(false);
  const [selectedData, setselectedData] = useState(null);
  const [finType, setfinType] = useState(Cards[0])
 
  const handleViewDataModal = (d) => {
    if (d) {
      setselectedData(d);
    }
    setopen(!open);
  };
  const closeModal = (d) => {
    setopen(false);
  };
  const handleFintype = (d) => {
    setfinType(d);
  };

  return (
    <Grid container alignItems="stretch" justifyContent="space-around">
         <ButtonGroup   variant="outlined" aria-label="Loading button group">
        {Cards.map(card => 
            <Button onClick={()=> handleFintype(card)}>{card.title}</Button>
        )}
        </ButtonGroup>
      {data && data.map((d) => (
        <Card key={d.id}
          sx={{
            p: 2,
            width: 1,
            // maxWidth: 520,
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
                      onClick={() => handleCurrentForm(path, d?.id, redirect)}
                    >
                      <Icon width={40} icon={editFill} />
                    </NewButton>
                  </Tooltip>
                </ListItemText>
              </Item>
            </Box>
            {Object.keys(d)
              .filter(e => !['id', 'user_id'].includes(e))
              .slice(0, 3)
              .map((e, i) => (
                <FinanceCardContent key={i.toString()} field={e} data={d} />
              ))}
          </Stack>
          <CardActions disableSpacing>
            <Button
              edge="end"
              variant="outlined"
              size="medium"
              color="inherit"
              onClick={() => handleViewDataModal(d)}
              startIcon={<Icon icon={eyeFill} />}
            >
              View full data
            </Button>
          </CardActions>
        </Card>
      ))}
      <AddFinanceCard handleCurrentForm={handleCurrentForm} redirect={redirect} fintype={finType} />
      <AlertDialog
        fullWidth
        showClose
        maxWidth="sm"
        title="Data Verification"
        handleClose={closeModal}
        component={
          <Card
            sx={{
              p: 2,
              width: 1,
              height: 'auto',
              mt: 2,
            }}
          >
            {selectedData &&
              Object.keys(selectedData).filter(e => !['id', 'user_id', 'created_at', 'updated_at'].includes(e)).map((e, i) => (
                <FinanceCardContent key={i.toString()} field={e} data={selectedData} />
              ))}
          </Card>
        }
        open={open}
      />
    </Grid>
  );
};

FinanceCard.propTypes = {
  data: PropTypes.array,
  handleCurrentForm: PropTypes.func,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default FinanceCard;
