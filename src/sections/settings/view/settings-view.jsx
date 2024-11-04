import {  useState } from 'react';
import { Icon } from '@iconify/react';
import roundReceipt from '@iconify/icons-eva/email-fill'
// import auditTrail from '@iconify/icons-eva/file-text-fill'
import roundAccountBox from '@iconify/icons-eva/person-fill'

// material
import {
  Box,
  Tab,
  Tabs,
  Stack,
  Container,
} from '@mui/material';

import Emails from '../emails';
import MainProfileView from '../main-profile';


// hooks
// import useAuth from '../../../../hooks/useAuth';
// utils


// ----------------------------------------------------------------------

export default function SettingsView() {
  const [currentTab, setCurrentTab] = useState('General');

  const ACCOUNT_TABS = [
    {
      value: 'General',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MainProfileView />
    },
    {
      value: 'Email',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <Emails />
    },
    // {
    //   value: 'Audit Trail',
    //   icon: <Icon icon={auditTrail} width={20} height={20} />,
    //   component: <Emails />
    // },
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container >


    <Stack spacing={5}>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {ACCOUNT_TABS.map((tab) => (
          <Tab disableRipple key={tab.value} label={tab.value} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Stack>
  </Container>
  );
}


