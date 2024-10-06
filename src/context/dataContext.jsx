/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback, createContext } from 'react';

import useAuth from 'src/hooks/useAuth';

import { profileAPIs } from 'src/apis';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const [data, setdata] = useState(null);
  const [refetchData, setrefetchData] = useState(new  Date().getTime())

  const handleRefetch =  useCallback(
    () => {
      setrefetchData(new Date().getTime())
    },
    [],
  )
  

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const api = profileAPIs(user?.id);
          const basic = await api.basicAPI._readMany();
          const contact = await api.contactAPI._readMany();
          const employment = await api.employmentAPI._readMany();
          const education = await api.educationAPI._readMany();
          const financial = await api.finInfoAPI._readMany();
          const realestate = await api.realEstateAPI._readMany();
          const residential = await api.residentialHistoryAPI._readMany();
          const identity = await api.identityAPI._readMany()
          setdata({
            basic: basic.data || [],
            contact: contact.data || [],
            empInfo: employment.data || [],
            eduInfo: education.data || [],
            finInfo: financial.data || {},
            reInfo: realestate.data || [],
            resInfo: residential.data || [],
            idInfo: identity.data || [],
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [user]);

  return <DataContext.Provider value={{ data, handleRefetch, refetchData }}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContext;
