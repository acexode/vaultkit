import * as React from 'react';
import PropTypes from 'prop-types';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function CategorySelectCheckmarks({handleSelected, list, isChild, handleNested, childName, title}) {
  const [selected, setselected] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const val = typeof value === 'string' ? value.split(',') : value
    setselected(val);
    if(isChild){
        handleNested(childName, val)
    }else{
        handleSelected(val);

    }
  };

  return (
    <div>
      <FormControl sx={{  width: '100%', mb: 1  }}>
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(val) => val.join(', ')}
          MenuProps={MenuProps}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selected.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

CategorySelectCheckmarks.propTypes = {
    handleSelected: PropTypes.func,
    handleNested: PropTypes.func,
    childName: PropTypes.func,
    list: PropTypes.array,
    isChild: PropTypes.bool,
    title: PropTypes.string,
  };
