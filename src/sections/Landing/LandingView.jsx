import React from 'react';

import { styled } from '@mui/material';

import Page from 'src/components/common/Page';

import Hero from './Hero';
import Features from './Feature';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import Header from '../../layouts/main/Header';

const RootStyle = styled(Page)({
    height: '100%'
  });
  
  const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default
  }));

const LandingView = () => (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <Header />
      <Hero />
      <ContentStyle>
      <HowItWorks />
      <Features />
      <Benefits />

      </ContentStyle>
    </RootStyle>
  );

export default LandingView;
