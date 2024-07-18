import React, { useState } from 'react';

import { Checkbox, FormGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';

const NestedMultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const data = {
    Fruits: {
      Apple: false,
      Citrus: {
        Orange: false,
        Lemon: false,
      },
      Banana: false
    },
    Vegetables: {
      Root: {
        Carrot: false,
        Potato: false
      },
      Leafy: {
        Lettuce: false,
        Spinach: false
      }
    }
  };

  const handleSelectChange = (path) => {
    const updatedItems = { ...selectedItems };
    let currentLevel = updatedItems;
    const pathList = path.split('.');
    pathList.forEach((key, index) => {
      if (index === pathList.length - 1) {
        currentLevel[key] = !currentLevel[key];
      } else {
        currentLevel = currentLevel[key] || {};
      }
    });
    setSelectedItems(updatedItems);
  };

  const renderOptions = (options, path = '') => Object.keys(options).map((key) => {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof options[key] === 'object') {
        return (
          <FormGroup key={currentPath}>
            <FormLabel component="legend">{key}</FormLabel>
            {renderOptions(options[key], currentPath)}
          </FormGroup>
        );
      } 
        return (
          <FormControlLabel
            control={<Checkbox checked={!!selectedItems[currentPath]} onChange={() => handleSelectChange(currentPath)} />}
            label={key}
            key={currentPath}
          />
        );
      
    });

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Items</FormLabel>
      <FormGroup>
        {renderOptions(data)}
      </FormGroup>
    </FormControl>
  );
};

export default NestedMultiSelect;
