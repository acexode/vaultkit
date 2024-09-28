import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, FormGroup, TextField, FormControlLabel } from '@mui/material';

const CurrentEndDate = ({ field, formik }) => {
  const {setFieldValue} = formik
  return (
    <div key={field.name}>
      {' '}
      <TextField
        fullWidth
        type="date"
        id={field.name}
        name={field.name}
        label={field.label}
        value={formik.values[field.name]}
        disabled={formik.values[field.name] === true}
        onChange={formik.handleChange}
        error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
        helperText={formik.touched[field.name] && formik.errors[field.name]}
        InputLabelProps={{ shrink: true }}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              key={field.name}
              fullWidth
              name={field.name}
              onChange={(evt) => {
                console.log(evt);
                setFieldValue(field.name, evt.target.checked)
              }}
            />
          }
          label={field.labelTwo}
        />
      </FormGroup>
    </div>
  );
};

CurrentEndDate.propTypes = {
  field: PropTypes.any,
  formik: PropTypes.any,
};
export default CurrentEndDate;
