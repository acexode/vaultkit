import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// import Button from '@mui/material/Button';
import { Grid, Button, Container } from '@mui/material';

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
  const [categoryField, setcategoryField] = useState({
    basic: [],
    contact: [],
    empInfo: [],
    eduInfo: [],
    finInfo: [],
    idInfo: [],
    reInfo: [],
    resInfo: [],
  })
  const handleNested = (field, data) => {
    const val = {
      ...categoryField,
      [field]: data
    }
    setcategoryField(val)
    console.log(selectedCategory);
  };
  const handleClick = () => {
    console.log(selectedCategory);
  };
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const fieldData = getFormFields('field-labels');
  const getCategoryField = (key) => {
    let val = '';
    switch (key) {
      case categories[0]:
        val = 'basic';
        break;
      case categories[1]:
        val = 'contact';
        break;
      case categories[2]:
        val = 'eduInfo';
        break;
      case categories[3]:
        val = 'empInfo';
        break;
      case categories[4]:
        val = 'finInfo';
        break;
      case categories[5]:
        val = 'idInfo';
        break;
      case categories[6]:
        val = 'reInfo';
        break;
      case categories[7]:
        val = 'resInfo';
        break;

      default:
        break;
    }
    return val;
  };
  console.log(fieldData);

  const renderForm = (
    <>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <CategorySelectCheckmarks
          handleSelected={setselectedCategory}
          list={categories}
          isChild={false}
          title="Category of data"
        />
        <Grid container>
          {setselectedCategory.length > 0 &&
            selectedCategory.map((e) => (
              <Grid xs={12} md={6} sx={{ pr: 1 }}>
                <CategorySelectCheckmarks
                  handleNested={handleNested}
                  childName={getCategoryField(e)}
                  list={fieldData[getCategoryField(e)]}
                  isChild
                  title={e}
                />
              </Grid>
            ))}
        </Grid>

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
