import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid, Divider, Typography, CardContent, ListItemText } from '@mui/material';

import { finColumns, filterFinanceFields } from 'src/utils/download-utils';

import { toSentenceCaseKey } from '../user/utils';
import { CustomListItems, CustomUnorderedList } from './styled';


const InvestmentLiabilityCard = ({data, title, name}) =>  {
  const left = {width: '70%'}
  const right = {width: '30%'}
  const filtered = filterFinanceFields(data, finColumns[name])
  return (
    <Grid item mb={3} xs={12} md={6} lg={6}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
        <Typography variant="h6" component="div" mb={3}>
            {title} Information
          </Typography>
          {filtered.map((f, index) => (
            <>
          <CustomUnorderedList>
            {f && Object.entries(f).map(([key, value]) => (
              <CustomListItems key={key}>
                <ListItemText sx={left} primary={toSentenceCaseKey(key)} />
                <ListItemText sx={right} secondary={value} />
              </CustomListItems>
            ))}
          </CustomUnorderedList>
          {index !== data.length -1 && <Divider sx={{ marginY: 2 }} />}
            
            </>

          ))}
        </CardContent>
      </Card>
    </Grid>
  )
}


InvestmentLiabilityCard.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string
};



export default InvestmentLiabilityCard
