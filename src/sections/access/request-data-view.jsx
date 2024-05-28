import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// import Button from '@mui/material/Button';
import {  Button, Container } from '@mui/material';

import { getFormFields } from 'src/_mock/formData';

import CategorySelectCheckmarks from './category-select';

// ----------------------------------------------------------------------
const categories = [
  'Personal Infomation',
  'Contact Information',
  'Employment Information',
  'Education Information',
  'Financial Information',
  'Identification Information',
  'Real Estate Information',
  'Residential Information',
];
RequestDataView.propTypes = {
  handleClose: PropTypes.func,
};
export default function RequestDataView({ handleClose }) {
  const [selectedCategory, setselectedCategory] = useState([]);

  const handleClick = () => {
    console.log(selectedCategory);
  };
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const fieldData = getFormFields('field-labels');

  console.log(fieldData);

  const renderForm = (
    <>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <CategorySelectCheckmarks
          handleSelected={setselectedCategory}
          list={categories}
          title="Category of data"
        />

        <TextField
          sx={{ mt: 0 }}
          name="email"
          label="Enter Recipient Email"
          helperText="Email of the sharer?"
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          fullWidth
          color="secondary"
          size="large"
          sx={{ marginRight: '10px' }}
        >
          Cancel
        </Button>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={handleClick}
        >
          Share
        </LoadingButton>
      </Stack>
    </>
  );

  return (
    <Container sx={{ p: 0 }}>
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Request Data
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
          Select the category of data you need and select specific fields
        </Typography>

        {renderForm}
      </Stack>
    </Container>
  );
}
