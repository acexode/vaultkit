import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import * as StyledC from './LandingStyled';
import ellipse from '../../assets/ellipse.png';
import demoIcon from '../../assets/demoIcon.png';
import curlyArrow from '../../assets/curly-arrow.png';

export default function HeroView() {
  return (
    <StyledC.Hero>
      <Box sx={{ position: 'absolute', top: '30px', left: '0px', borderRadius: '50%' }}>
        {' '}
        <img alt="" src={ellipse} />{' '}
      </Box>
      <Container maxWidth="lg">
        <StyledC.ContentStyle>
          <StyledC.HeroTextHolder>
            <StyledC.Heading>
              <Typography variant="span" sx={{ lineHeight: '77px', fontWeight: 600 }}>
                Unlock the power of
              </Typography>{' '}
              <StyledC.VerifiedText>verified, </StyledC.VerifiedText>
              <br />
              <StyledC.VerifiedText variant="span">secure data</StyledC.VerifiedText>{' '}
              <Typography variant="span" sx={{ lineHeight: '77px', fontWeight: 600 }}>
                with VaultKit
              </Typography>{' '}
              <Box component="img" src='assets/hero/lock.png' sx={{width: '60px', verticalAlign: 'top'}} />
            </StyledC.Heading>
            <StyledC.Supportingtext>
              Helping companies obtain verified data and empowering users to manage and share their
              data with full control and security.
            </StyledC.Supportingtext>
          </StyledC.HeroTextHolder>
          <StyledC.ActionWrapper sx={{ mt: 0 }}>
            <StyledC.CurlyArrow loading="lazy" src={curlyArrow} />
            <StyledC.Actions>
              <StyledC.GetStarted>
                <StyledC.GetStartedBase>Get Started</StyledC.GetStartedBase>
              </StyledC.GetStarted>
              <StyledC.RequestDemo>
                <StyledC.RequestDemoBase>
                  <StyledC.DemoIcon loading="lazy" src={demoIcon} />
                  <StyledC.Text>Request Demo</StyledC.Text>
                </StyledC.RequestDemoBase>
              </StyledC.RequestDemo>
            </StyledC.Actions>
          </StyledC.ActionWrapper>
          <StyledC.Img4 loading="lazy" srcSet="assets/hero/laptop.png" />
        </StyledC.ContentStyle>
      </Container>
    </StyledC.Hero>
  );
}
