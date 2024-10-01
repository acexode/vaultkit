/* eslint-disable no-unsafe-optional-chaining */
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { Grid, Stack } from '@mui/material';

import useUserData from 'src/hooks/useUserData';

import { mapShareViewFields, getKeysWithTrueValues } from 'src/utils/utils';

import FinFormShare from './fin-form-share';
import SelectDataToShare from './select-data-share';


const FinancialDataShare = ({ fields, name, setFieldValue, values, fieldData, multiSelectAll }) => {
  const { data } = useUserData();
  const [mappedInsurances, setmappedInsurances] = useState([])
  const [mappedInvestments, setmappedInvestments] = useState([])
  const [mappedLiabilities, setmappedLiabilities] = useState([])
  const [mappedAssets, setmappedAssets] = useState([])
  const [mappedBank_Details, setmappedBank_Details] = useState([])
  const [initiaVals, setinitiaVals] = useState({})
  console.log(multiSelectAll);
  useEffect(() => {
    if (data) {
      const { assets, bank_details, insurances, investments, liabilities } = data && data?.finInfo;
      const mAssets = assets ? mapShareViewFields(assets, 'assets') : [];
      const mBank_Details = bank_details
        ? mapShareViewFields(bank_details, 'bank_details')
        : [];
      const mInsurances = insurances ? mapShareViewFields(insurances, 'insurances') : [];
      const mInvestments = investments ? mapShareViewFields(investments, 'investments') : [];
      const mLiabilities = liabilities ? mapShareViewFields(liabilities, 'liabilities') : [];
      setmappedAssets(mAssets)
      setmappedBank_Details(mBank_Details)
      setmappedInsurances(mInsurances)
      setmappedInvestments(mInvestments);
      setmappedLiabilities(mLiabilities)
      const mappedItems = [
        mAssets,
        mBank_Details,
        mInsurances,
        mInvestments,
        mLiabilities,
      ];

      const initialV = {};
      const itemNames = ['assets', 'bank_details', 'insurances', 'investments', 'liabilities'];
      mappedItems.forEach((e, i) => {
        if (e) {
          initialV[itemNames[i]] = e?.reduce((accumulator, current) => {
            const d = values[itemNames[i]]?.reduce((a, v) => ({ ...a, [v]: v }), {});
            // console.log(accumulator[current.id], d[current.id]);
            accumulator[current.id] = d[current.id] || false;
            return accumulator;
          }, {});
          console.log(initialV);
        }
      });
      setinitiaVals(initialV)
    }
  }, [data, multiSelectAll, values]);

  const formik = useFormik({
    initialValues: initiaVals,
    enableReinitialize: true,
  });
  const handleCheckboxChange = (field, val, category) => {
    const v = {...formik.values[category], [field]: val}
    formik.setFieldValue(category, v);
    const parentValue = getKeysWithTrueValues(v)
    setFieldValue(category, parentValue)
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Grid
          container
          sx={{ marginLeft: 0, background: '#F5F6F7', padding: '10px', borderRadius: '5px' }}
        >
           <Grid pl={2} pb={2} item xs={12}>
                Financial Information
              </Grid>
              <SelectDataToShare
              fieldData={fieldData}
              values={values}
              name={name}
              fields={fields}
              setFieldValue={setFieldValue}
            />
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
                  name='assets'
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
                  name='bank_details'
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
                    name='insurances'
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
                    name='investments'
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
                    name='liabilities'
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
  multiSelectAll: PropTypes.any.isRequired,
};

export default FinancialDataShare;
