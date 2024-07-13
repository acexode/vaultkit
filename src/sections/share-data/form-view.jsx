import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

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

const SelectDataToShare = ({ fields, name, handleCheckboxChange }) => {
  // const [selectedFields, setSelectedFields] = useState(
  //   fields.reduce((acc, field) => ({ ...acc, [field.name]: selectAll }), {})
  // );
  
  // useEffect(() => {
  //   const newSelectedFields = fields.reduce((acc, field) => ({ ...acc, [field.name]: selectAll }), {});
  //   setSelectedFields((prevSelectedFields) => {
  //     const isDifferent = Object.keys(newSelectedFields).some(
  //       (key) => newSelectedFields[key] !== prevSelectedFields[key]
  //     );
  //     return isDifferent ? newSelectedFields : prevSelectedFields;
  //   });
  // }, [selectAll, fields]);

  // const handleCheckboxChangeInternal = (name) => (event) => {
  //   const { checked } = event.target;
  //   console.log(checked)
  //   setSelectedFields((prevSelectedFields) => ({
  //     ...prevSelectedFields,
  //     [name]: checked,
  //   }));
  //   handleCheckboxChange(name)(event);
  // };
  console.log("")
  return (
    <Grid container sx={{ marginLeft: 0, background: "#F5F6F7", padding: '10px', borderRadius: '5px' }}>
      {fields.map((field) => (
        <Grid item xs={12} md={4} mb={2} key={field.name}>
          <Item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedFields[field.name] || selectAll}
                    onChange={handleCheckboxChangeInternal(field.name)}
                  />
                }
                label={field.label}
              />
            </FormGroup>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

SelectDataToShare.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectAll: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default SelectDataToShare;
