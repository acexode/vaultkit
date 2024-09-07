import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Card from '@mui/material/Card';
import { Grid, Button, ButtonGroup } from '@mui/material';

import AlertDialog from '../../modal/modal';
import AddFinanceCard from './AddFinanceCard';
import FinanceCardContent from './FinanceCardContent';
import FinInformationCard from './FinInformationCard';

const FinanceCard = ({ finInfo, handleCurrentForm, path, title, redirect }) => {
  const Cards = [
    { title: 'Financial Info', path: 'financial-info' },
    { title: 'Bank Details', path: 'bank_details' },
    { title: 'Liability Info', path: 'liabilities' },
    { title: 'Assets', path: 'assets' },
    { title: 'Insurance Info', path: 'insurances' },
    { title: 'Investment Info', path: 'investments' },
  ];
  console.log(finInfo);

  const [open, setopen] = useState(false);
  const [selectedData, setselectedData] = useState(null);
  const [finType, setfinType] = useState(Cards[0]);

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
      <ButtonGroup variant="outlined" aria-label="Loading button group">
        {Cards.map((card) => (
          <Button
            variant={card.path === finType.path ? 'contained' : 'outlined'}
            onClick={() => handleFintype(card)}
            disabled={card.path !== 'financial-info' && !finInfo.id}
          >
            {card.title}
          </Button>
        ))}
      </ButtonGroup>
      {finType.path === 'financial-info' ? (
        <FinInformationCard
          data={finInfo}
          handleCurrentForm={handleCurrentForm}
          handleViewDataModal={handleViewDataModal}
          title={title}
          redirect={redirect}
          fin_info_id={finInfo.id}
          path={path}
        />
      ) : (
        <>
          {finInfo[finType.path] &&
            finInfo[finType.path].map((d) => (
              <FinInformationCard
                data={d}
                handleCurrentForm={handleCurrentForm}
                handleViewDataModal={handleViewDataModal}
                title={finType.title}
                redirect={redirect}
                fin_info_id={finInfo.id}
                path={finType.path}
              />
            ))}
        </>
      )}

      {finType.path === 'financial-info' && finInfo.id ? null : (
        <AddFinanceCard
          handleCurrentForm={handleCurrentForm}
          redirect={redirect}
          fintype={finType}
          fin_info_id={finInfo.id}
        />
      )}
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
              Object.keys(selectedData)
                .filter((e) => !['id', 'user_id', 'created_at', 'updated_at'].includes(e))
                .map((e, i) => (
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
  finInfo: PropTypes.object,
  handleCurrentForm: PropTypes.func,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default FinanceCard;
