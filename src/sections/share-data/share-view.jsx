import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Stack,
  Button,
  Checkbox,
  useTheme,
  FormGroup,
  useMediaQuery,
  FormControlLabel,
} from '@mui/material';

import useAuth from 'src/hooks/useAuth';
import useUserData from 'src/hooks/useUserData';

import axiosInstance from 'src/utils/axios';
import { resourceMap } from 'src/utils/share-form-utils';

import { getFormFields } from 'src/_mock/formData';
import { requestDataEndpoint } from 'src/configs/endpoints';

import DataConfigView from './components/data-config';
import { initialValues } from './constants/initialValues';
import MultiDataShare from './components/multi-data-share';
import SelectDataToShare from './components/select-data-share';
import FinancialDataShare from './components/financial-data-share';

const SelectAllCheck = ({ handleSelectAll, values, field, category, setFieldValue, type }) => (
  <FormGroup>
    <FormControlLabel
      name={field}
      onChange={(ev) => handleSelectAll(setFieldValue, category, ev.target.checked, type)}
      control={<Checkbox checked={values[category][field]} />}
      label="Select All"
    />
  </FormGroup>
);

SelectAllCheck.propTypes = {
  handleSelectAll: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired
};

function CustomTabPanel(props) {
  const { children, value, index, orientation, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ flex: 1 }}
      id={orientation === 'vertical' ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`}
      aria-labelledby={orientation === 'vertical' ? `vertical-tab-${index}` : `simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  orientation: PropTypes.number.isRequired,
};

function a11yProps(index, orientation) {
  return {
    id: orientation === 'vertical' ? `vertical-tab-${index}` : `simple-tab-${index}`,
    'aria-controls':
      orientation === 'vertical' ? `vertical-tabpanel-${index}` : `simple-tabpanel-${index}`,
  };
}

export default function ShareView({ handleCloseModal }) {
  const themes = useTheme();
  const {handleRefetch} = useUserData();
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const fieldData = getFormFields('field-labels', user.id);
  const [multiSelectAll, setmultiSelectAll] = useState({
    eduInfo: false,
      empInfo: false,
      reInfo: false,
      resInfo: false,
      liabilities: false,
      assets: false,
      insurances: false,
      investments: false,
      bank_details: false,
  })
  const typeMapping = {
    basic: 'basic_information',
    contact: 'contact',
    eduInfo: 'education',
    empInfo: 'employment',
    finInfo: 'financial',
    idInfo: 'identification',
    resInfo: 'residential',
    reInfo: 'realestate',
    liabilities: 'liabilities',
    assets: 'assets',
    insurances: 'insurances',
    investments: 'investments',
    bank_details: 'bank_details',
  };

  const handleChange = (event, newValue) => {
    if (getDisabled) {
      setValue(newValue);
    }
  };

  const handleSaveNext = () => {
    const next = value === 8 ? 0 : value + 1;
    setValue(next);
  };

  const handleClose = () => {
    handleCloseModal('share-data-view');
  };

  const handleSelectAll = (setFieldValue, category, checked, type) => {
    console.log(type, category);
    if(type === 'single'){
      Object.keys(initialValues[category]).forEach((field) => {
        setFieldValue(`${category}.${field}`, checked);
      });

    }else {
      setmultiSelectAll({...multiSelectAll, [category]: checked})
    }
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      eduInfo: [],
      empInfo: [],
      reInfo: [],
      resInfo: [],
      liabilities: [],
      assets: [],
      insurances: [],
      investments: [],
      bank_details: [],
    },
    onSubmit: async (values) => {
      console.log(values);
      const resources = resourceMap(values, typeMapping)
      if(resources.length){
        const data = {
          access_request: {
            title: values.title,
            receiver_email: values.receiver_email,
            receiver_type: 'user',
            sharer_type: 'user',
            start_time: values.start_time,
            end_time: values.end_time,
            download: values.download,
            resource: resourceMap(values, typeMapping),
            sharer_id: user?.id,
          },
        };
        console.log(data);
  
        try {
          setLoading(true);
          const url = requestDataEndpoint(user.id);
          const response = await axiosInstance.post(url.share, data);
          handleRefetch()
          if (response.status === 200) {
            enqueueSnackbar(response.data.success, {
              variant: 'success',
            });
          }
          setLoading(false);
          handleClose('share-data-view');
        } catch (error) {
          console.log(error);
          setLoading(false);
          const errorCodes = [404, 422]
          if (errorCodes.includes(error?.response?.status)) {
            enqueueSnackbar(error.response.data.error, {
              variant: 'error',
            });
          }else{
            enqueueSnackbar('Something went wrong', {
              variant: 'error',
            });
          }
        }

      }else{
        enqueueSnackbar('You must select data for sharing', {
          variant: 'error',
        });
      }
    },
  });

  const getDisabled = () =>
    formik.values.title === '' ||
    formik.values.receiver_email === '' ||
    formik.values.start_time === '' ||
    formik.values.end_time === '';

  return (
    <Box sx={{ width: '100%' }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          mb={5}
          marginTop={5}
        >
          <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h4">
            Select data for sharing
          </Typography>
          <Box
            sx={{ display: isMobile ? 'flex' : 'block' }}
            direction={isMobile ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              disabled={getDisabled()}
              variant="outlined"
              sx={{ mx: 2, flex: 1 }}
              autoFocus
              onClick={handleSaveNext}
            >
              {value === 8 ? 'Previous' : 'Save & Next'}
            </Button>
            <LoadingButton
              variant="contained"
              sx={{ flex: 1 }}
              type="submit"
              autoFocus
              loading={loading}
            >
              Share Data
            </LoadingButton>
          </Box>
        </Stack>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            height: 450,
            flexDirection: isMobile ? 'column' : 'horizontal',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            orientation={!isMobile ? 'vertical' : 'horizontal'}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Data Settings" {...a11yProps(0)} />
            <Tab disabled={getDisabled()} label="Personal Information" {...a11yProps(1)} />
            <Tab disabled={getDisabled()} label="Contact" {...a11yProps(2)} />
            <Tab disabled={getDisabled()} label="Employment" {...a11yProps(3)} />
            <Tab label="Education" {...a11yProps(4)} />
            <Tab label="Financial" {...a11yProps(5)} />
            <Tab disabled={getDisabled()} label="Identification" {...a11yProps(6)} />
            <Tab disabled={getDisabled()} label="Real Estate" {...a11yProps(7)} />
            <Tab disabled={getDisabled()} label="Residential Histories" {...a11yProps(8)} />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            <DataConfigView
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              formik={formik}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SelectAllCheck
              type="single"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="basic"
              handleSelectAll={handleSelectAll}
            />
            <SelectDataToShare
              fieldData={fieldData}
              values={formik.values}
              name="basic"
              fields={initialValues.basic}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <SelectAllCheck
              type="single"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="contact"
              handleSelectAll={handleSelectAll}
            />
            <SelectDataToShare
              fieldData={fieldData}
              values={formik.values}
              name="contact"
              fields={initialValues.contact}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="empInfo"
              handleSelectAll={handleSelectAll}
            />
            <MultiDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="empInfo"
              fields={initialValues.empInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="eduInfo"
              handleSelectAll={handleSelectAll}
            />
            <MultiDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="eduInfo"
              fields={initialValues.eduInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="finInfo"
              handleSelectAll={handleSelectAll}
            />
            <FinancialDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="finInfo"
              fields={initialValues.finInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={6}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="idInfo"
              handleSelectAll={handleSelectAll}
            />
            <MultiDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="idInfo"
              fields={initialValues.idInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={7}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="reInfo"
              handleSelectAll={handleSelectAll}
            />
            <MultiDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="reInfo"
              fields={initialValues.reInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={8}>
            <SelectAllCheck
              type="multi"
              field="all"
              values={formik.values}
              setFieldValue={formik.setFieldValue}
              category="resInfo"
              handleSelectAll={handleSelectAll}
            />
            <MultiDataShare
              multiSelectAll={multiSelectAll}
              setmultiSelectAll={setmultiSelectAll}
              fieldData={fieldData}
              values={formik.values}
              name="resInfo"
              fields={initialValues.resInfo}
              setFieldValue={formik.setFieldValue}
            />
          </CustomTabPanel>
        </Box>
      </form>
    </Box>
  );
}

ShareView.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
