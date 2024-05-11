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
  // flex: 1,
  color: theme.palette.text.secondary,
}));
const SelectDataToShare = ({ fields }) => (
    <Grid
      container
      // divider={<Divider orientation="vertical" flexItem />}
      sx={{ marginLeft: 0, background: "#F5F6F7", padding: '10px', borderRadius: '5px' }}
      // spacing={{  md: 6, lg: 6 }}
    >
      {fields.map((f) => (
        <Grid item xs={4}>
          <Item>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={f} />
            </FormGroup>
          </Item>
        </Grid>
      ))}
    </Grid>
  
  
  )
  
SelectDataToShare.propTypes = {
  fields: PropTypes.array,
};
export default SelectDataToShare;
