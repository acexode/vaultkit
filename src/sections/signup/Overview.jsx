import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Tab, Box, Tabs } from '@mui/material';

import IndividualSignupView from './individual-view';
import OrganizationSignupView from './organization-view';

// const validationSchema = Yup.object({
//   companyName: Yup.string().required('Required'),
//   companyEmail: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string().required('Required'),
//   name: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
// });

const SignupOverView = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width="420px" padding="16px" >
          <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Individual" />
            <Tab label="Organization" />
          </Tabs>

          <TabPanel value={tabIndex} index={0}>
            <IndividualSignupView />
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
            <OrganizationSignupView />
        </TabPanel>

        

      </Box>
    </Box>
  );
};

const TabPanel = ({ children, value, index }) => (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
export default SignupOverView;
