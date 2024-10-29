import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, styled, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import useUserData from 'src/hooks/useUserData';

import { useGlobalContext } from 'src/context/context';

import EmptyContent from 'src/components/common/EmptyContent';

import { formPath, CategoryNames } from 'src/sections/profile/view/constant';

const exclude = [
  "id",
  "is_private",
  "created_at",
  "updated_at",
  "user"
]
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
  const { handleCurrentForm } = useGlobalContext();
  
  const handleCheckboxChange = (field, checked, category) => {
    setFieldValue(`${category}.all`, false);
    setFieldValue(field, checked);
  };
  const handleNavigate = () =>{

    handleCurrentForm(formPath[name], null, 0)
  }
  const getLabel = (field, category) => fieldData[category].filter(e => e.name === field )[0]?.label || ''
  const {data} = useUserData()
  // console.log(data, fields, name);
  const list = Object.keys(data[name])
  console.log(data.basic, list, fieldData.basic);
  return (
    <Grid
      container
      sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
    >
      {list.length > 0 && list.filter(e => !exclude.includes(e)).map((field) => (
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
      {list.length === 0 && 
      <Grid item xs={12} md={12} mb={2} >
      <EmptyContent title="No Data to share" description={<Button variant='outlined' onClick={handleNavigate} >Update Your {CategoryNames[name]}</Button>} />
      </Grid>
      }
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
