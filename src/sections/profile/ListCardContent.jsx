import React from 'react';
import PropTypes from 'prop-types';

import {

  styled,

  Typography,
  ListItemText
} from '@mui/material';

import { convertToSentenceCase } from 'src/utils/common-utils';


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
const ListCardContent = ({data, field}) => (
    <ListItemRoot>
    <Item>
      <ListItemText sx={{ minWidth: '84px' }}>
        {convertToSentenceCase(field)}
      </ListItemText>
      <ListItemText sx={{ textAlign: 'right' }}>
        <Typography sx={{ fontWeight: '700' }}>{data[field]}</Typography>
      </ListItemText>
    </Item>
  </ListItemRoot>
  )

  ListCardContent.propTypes = {
    data: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired,
  };

export default ListCardContent
