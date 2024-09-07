import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, styled, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginLeft: '7px',
    marginBottom: '7px',
    height: '100%',
    color: theme.palette.text.secondary,
  }));

const FinFormShare = ({field, formik, handleCheckboxChange, name}) => (
    <Grid item xs={12} md={4} mb={2} key={field.id}>
      {Object.keys(formik.values).length &&
    <Item>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name={field.id}
              checked={formik.values[name][field.id] || false}
              onChange={(evt) =>
                handleCheckboxChange(field.id, evt.target.checked, name)
              }
            />
          }
          label={field.title}
        />
        <Typography variant="caption" sx={{textAlign: 'left', paddingLeft:4}}>
          {field.subtitle}
        </Typography>
      </FormGroup>
    </Item>
      }
  </Grid>
  )

  FinFormShare.propTypes = {
    name: PropTypes.string.isRequired,
    field: PropTypes.any.isRequired,
    formik: PropTypes.any.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };
export default FinFormShare
