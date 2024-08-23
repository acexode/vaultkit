import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Grid, Stack } from '@mui/material';

import useUserData from 'src/hooks/useUserData';

import { mapShareViewFields, getKeysWithTrueValues } from 'src/utils/utils';

import FinFormShare from './fin-form-share';

const FinancialDataShare = ({ fields, name, setFieldValue, values, fieldData }) => {
  const { data } = useUserData();
  const { assets, bank_details, insurances, investments, liabilities } = data.finInfo;
  const mappedAssets = assets ? mapShareViewFields(assets, 'assets') : null;
  const mappedBank_Details = bank_details ? mapShareViewFields(bank_details, 'bank_details') : null;
  const mappedInsurances = insurances ? mapShareViewFields(insurances, 'insurances') : null;
  const mappedInvestments = investments ? mapShareViewFields(investments, 'investments') : null;
  const mappedLiabilities = liabilities ? mapShareViewFields(liabilities, 'liabilities') : null;
  const mappedItems = [
    mappedAssets,
    mappedBank_Details,
    mappedInsurances,
    mappedInvestments,
    mappedLiabilities,
  ];
  console.log([]);
  console.log(data);
  const initialValues = {};
  const itemNames = ['assets', 'bank_details', 'insurances', 'investments', 'liabilities'];
  console.log(assets, bank_details, itemNames);
  mappedItems.forEach((e, i) => {
    if (e) {
      console.log(e, itemNames[i]);
      initialValues[itemNames[i]] = e.reduce((accumulator, current) => {
        const d = values[name].reduce((a, v) => ({ ...a, [v]: v }), {});
        accumulator[current.id] = d[current.id] || false;
        return accumulator;
      }, {});
    }
  });
  console.log(initialValues);

  const formik = useFormik({
    initialValues: {},
    enableReinitialize: true,
  });
  const handleCheckboxChange = (field, val) => {
    formik.setFieldValue(field, val);
    const parentValue = getKeysWithTrueValues({ ...formik.values, [field]: val });
    setFieldValue(name, parentValue);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
          {mappedAssets.length > 0 && (
            <>
              <Grid pl={2} pb={2} item xs={12}>
                Assets
              </Grid>
              {mappedAssets.map((field) => (
                <FinFormShare
                  handleCheckboxChange={handleCheckboxChange}
                  formik={formik}
                  field={field}
                />
              ))}
            </>
          )}
        </Grid>
        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
          {mappedBank_Details.length > 0 && (
            <>
              <Grid pl={2} pb={2} item xs={12}>
                Bank Details
              </Grid>
              {mappedBank_Details.map((field) => (
                <FinFormShare
                  handleCheckboxChange={handleCheckboxChange}
                  formik={formik}
                  field={field}
                />
              ))}
            </>
          )}
        </Grid>

        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
          {mappedInsurances.length > 0 && (
            <>
              <Grid pl={2} pb={2} item xs={12}>
                Insurances
              </Grid>
              {mappedInsurances &&
                mappedInsurances.map((field) => (
                  <FinFormShare
                    handleCheckboxChange={handleCheckboxChange}
                    formik={formik}
                    field={field}
                  />
                ))}
            </>
          )}
        </Grid>
        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
          {mappedInvestments.length > 0 && (
            <>
              <Grid pl={2} pb={2} item xs={12}>
                Investment
              </Grid>
              {mappedInvestments &&
                mappedInvestments.map((field) => (
                  <FinFormShare
                    handleCheckboxChange={handleCheckboxChange}
                    formik={formik}
                    field={field}
                  />
                ))}
            </>
          )}
        </Grid>
        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
          {mappedAssets.length > 0 && (
            <>
              <Grid pl={2} pb={2} item xs={12}>
                Liabilities
              </Grid>
              {mappedLiabilities &&
                mappedLiabilities.map((field) => (
                  <FinFormShare
                    handleCheckboxChange={handleCheckboxChange}
                    formik={formik}
                    field={field}
                  />
                ))}
            </>
          )}
        </Grid>
      </Stack>
    </form>
  );
};

FinancialDataShare.propTypes = {
  fields: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired,
  fieldData: PropTypes.any.isRequired,
};

export default FinancialDataShare;
