import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Paper,
  // Stack,
  styled,

  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginLeft: '7px',
  marginBottom: '7px',
  height: '100%',
  color: theme.palette.text.secondary,
}));
const SelectDataToShare = ({ fields, selectAll }) => (
    <Grid
      container
      // divider={<Divider orientation="vertical" flexItem />}
      sx={{ marginLeft: 0, background: "#F5F6F7", padding: '10px', borderRadius: '5px' }}
      // spacing={{  md: 6, lg: 6 }}
    >
      {fields.map((f) => (
        <Grid item xs={12} md={4} mb={2}>
          <Item>
            <FormGroup>
              <FormControlLabel checked={selectAll} control={<Checkbox />} label={f} />
            </FormGroup>
          </Item>
        </Grid>
      ))}
    </Grid>
  
  
  )
  
SelectDataToShare.propTypes = {
  fields: PropTypes.array,
  selectAll: PropTypes.bool,
};
export default SelectDataToShare;
