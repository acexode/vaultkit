import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { Grid, Paper, styled, Checkbox, FormGroup, Typography, FormControlLabel } from '@mui/material';

import useUserData from 'src/hooks/useUserData';

import { mapShareViewFields, getKeysWithTrueValues } from 'src/utils/utils';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginLeft: '7px',
  marginBottom: '7px',
  height: '100%',
  color: theme.palette.text.secondary,
}));

const MultiDataShare = ({ fields, name, setFieldValue, values, fieldData, multiSelectAll }) => {
  // console.log(values);
  const [initialValues, setinitialValues] = useState(null)
  const [mapped, setmapped] = useState(null)
    const {data} = useUserData()
    useEffect(() => {
      console.log(data[name]);
      const m = data && data[name] ? mapShareViewFields(data[name], name) : null
      setmapped(m)
      if(!initialValues){
        const vals = m?.reduce((accumulator, current) => {
          console.log(values, name);
            const d = values[name]?.reduce((a, v) => ({...a, [v]: v}), {})
            console.log(d);
            accumulator[current.id] = d[current.id];
            return accumulator;
        }, {});
        setinitialValues(vals)

      }
    }, [data, initialValues, name, values])

    useEffect(() => {
      console.log(values[name]);
      if(initialValues){
        console.log(initialValues);
        const d = Object.keys(initialValues).reduce((a, v) => ({...a, [v]: multiSelectAll[name]}), {})
        console.log(d, multiSelectAll[name]);
        setinitialValues(d)
        setFieldValue(name, Object.keys(d))

      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [multiSelectAll])


  const formik = useFormik({
    initialValues,
    enableReinitialize: true

  })
  const handleCheckboxChange = (field, val) => {
    formik.setFieldValue(field, val);
    const parentValue = getKeysWithTrueValues({...formik.values, [field]: val})
    console.log(name, parentValue);
    setFieldValue(name, parentValue)
};

 return (
    <form onSubmit={formik.handleSubmit}>
    <Grid
      container
      sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
    >
      {mapped && mapped.map((field) => (
        <Grid item xs={12} md={4} mb={2} key={field.id}>
          <Item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name={field?.id}
                    checked={formik.values ? formik?.values[field?.id] : false}
                    onChange={(evt) =>
                      handleCheckboxChange(field.id, evt.target.checked)
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
        </Grid>
      ))}
    </Grid>
    </form>
  );
};

MultiDataShare.propTypes = {
  fields: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  fieldData: PropTypes.any.isRequired,
  multiSelectAll: PropTypes.any.isRequired,
};

export default MultiDataShare;
