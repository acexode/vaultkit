import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, styled, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

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

const SelectDataToShare = ({ fields, name, setFieldValue, values, fieldData }) => {

  const handleCheckboxChange = (field, checked, category) => {
    setFieldValue(`${category}.all`, false);
    setFieldValue(field, checked);
  };
  const getLabel = (field, category) => fieldData[category].filter(e => e.name === field )[0]?.label || ''
  return (
    <Grid
      container
      sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
    >
      {Object.keys(fields).filter(e => e !== 'all').map((field) => (
        <Grid item xs={12} md={4} mb={2} key={field}>
          <Item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name={`${name}.${field}`}
                    checked={values[name][field]}
                    onChange={(evt) =>
                      handleCheckboxChange(`${name}.${field}`, evt.target.checked, name)
                    }
                  />
                }
                label={getLabel(field, name)}
              />
            </FormGroup>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

SelectDataToShare.propTypes = {
  fields: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  fieldData: PropTypes.any.isRequired,
};

export default SelectDataToShare;
