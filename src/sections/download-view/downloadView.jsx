import { faker } from '@faker-js/faker';
import { enqueueSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import axiosInstance from 'src/utils/axios';
import { getValueType } from 'src/utils/utils';
import { queryParamsToObject } from 'src/utils/crud-utils';

import { downloadEndpoint } from 'src/configs/endpoints';

import ContactInfoCard from './ContactInfoCard'; // Ensure this import is correct

import Overview from './overview';
import FinInfoCard from './FinInfoCards';
import PersonalInfoCard from './personalInfoCard';
import TimeLineInfoCard from './EducationInfoCard';
import FinInformationCard from './financialInfoCard';
import RealEstateInfoCard from './RealEstateInfoCard';
import ResidentialInfoCard from './ResidentialInfoCard';

const DownloadView = () => {


  const [dataObject, setdataObject] = useState(null)
  const location = useLocation();
  function groupByShareableType(data) {
    return data.reduce((result, currentItem) => {
      const { shareable_type } = currentItem;
  
      // Check if the shareable_type already exists in the result object
      if (!result[shareable_type]) {
        result[shareable_type] = [];
      }
  
      // Add the current item to the group
      result[shareable_type].push(currentItem);
  
      return result;
    }, {});
  }
  
  useEffect(() => {
    const queryObject = queryParamsToObject(location.search);
    const id = getValueType(queryObject.id)

    const fetchDownloadData = async () => {
      console.log(id);
      try {
        if(id){
          const url = downloadEndpoint(id);
          const response = await axiosInstance.get(url.allDetails);
          if (response.data && response.status === 200) {
            const obj = groupByShareableType(response.data.shareable_informations)
            console.log(obj);
            setdataObject(obj);
          } else if (response.error) {
            enqueueSnackbar(response.error.message, {
              autoHideDuration: 1000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'error',
            });

        }
        }
      } catch (error) {
        console.log(error);
        enqueueSnackbar('An error occurred while fetching data.', {
          autoHideDuration: 1000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        });
      }
    };
    fetchDownloadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {dataObject && dataObject.BasicInformation && <Overview data={dataObject.BasicInformation[0].shareable} /> }
      {dataObject && dataObject.ContactInformation && <ContactInfoCard obj={dataObject.ContactInformation[0].shareable} /> }
      {dataObject && dataObject.ResidentialHistory && <ResidentialInfoCard data={dataObject.ResidentialHistory} /> }
      {dataObject && dataObject.RealEstateInformation && <RealEstateInfoCard data={dataObject.RealEstateInformation} /> }
      {dataObject && dataObject.RealEstateInformation && <PersonalInfoCard  data={dataObject.IdentificationDatum} /> }

      {dataObject && dataObject.EducationDatum &&
      <TimeLineInfoCard
        title="Education Information"
        list={dataObject.EducationDatum.map((obj, index) => ({
          id: faker.string.uuid(),
          title: obj.shareable.degree,
          type: `order${index + 1}`,
          time: obj.shareable.end_date,
        }))}
      />
}
      {dataObject && dataObject.EmploymentInformation&&
      <TimeLineInfoCard
        title="Employment Information"
        list={dataObject.EmploymentInformation.map((obj, index) => ({
          id: faker.string.uuid(),
          title: obj.shareable.employer,
          type: `order${index + 1}`,
          time: obj.shareable.end_date,
        }))}
      />}
     {dataObject && dataObject.FinancialInformation && <FinInformationCard data={dataObject.FinancialInformation[0].shareable} />}
     {dataObject && dataObject.Asset && <FinInfoCard data={dataObject.Liability} title="Lia" name='liabilities' />}
    </Grid>
  );
};

export default DownloadView;
