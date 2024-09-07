import React from 'react'

import { Box } from '@mui/material';

import * as StyledC from './LandingStyled';
import demoIcon from '../../assets/demoIcon.png';
import multiUser from '../../assets/multi-user.png';

const FeatureSection = () => (
    <StyledC.FeaturesForIndividuals>
    <Box sx={{width: '100%'}}>
      <StyledC.Div5>
        <StyledC.Column>
          <StyledC.Div6>
            <StyledC.Div7>
              <StyledC.Div8>
                <StyledC.Badgegroup>
                  <StyledC.Badge>
                    Features - FOR INDIVIDUALS
                  </StyledC.Badge>
                </StyledC.Badgegroup>
                <StyledC.Div9>
                  <StyledC.Heading2>
                    Cutting-edge features for secure{' '}
                    <StyledC.VerifiedText fontWeight="600">
                      data management
                    </StyledC.VerifiedText>{' '}
                    and sharing
                  </StyledC.Heading2>
                  <StyledC.Supportingtext2>
                    Easily verify and share your data with companies, knowing you have full
                    control over who can access it and under what conditions.
                  </StyledC.Supportingtext2>
                </StyledC.Div9>
              </StyledC.Div8>
              <StyledC.Avatargroup>
                <StyledC.Img5
                  loading="lazy"
                  srcSet={multiUser}
                />
              </StyledC.Avatargroup>
            </StyledC.Div7>
            <StyledC.Actions2>
              <StyledC.GetStarted>
                <StyledC.GetStartedBase>Get Started</StyledC.GetStartedBase>
              </StyledC.GetStarted>
              <StyledC.RequestDemo>
                <StyledC.RequestDemoBase>
                  <StyledC.DemoIcon loading="lazy" src={demoIcon} />
                  <StyledC.Text>Request Demo</StyledC.Text>
                </StyledC.RequestDemoBase>
              </StyledC.RequestDemo>
            </StyledC.Actions2>
          </StyledC.Div6>
        </StyledC.Column>
        <StyledC.Column2>
          <StyledC.Div10>
            <StyledC.Div11>
              <StyledC.Featuretext>
                <StyledC.Img7
                  loading="lazy"
                  src="assets/features/svg/red-info.svg"
                />
                <StyledC.Div12>
                  <StyledC.Text3>Store Your Personal Information</StyledC.Text3>
                  <StyledC.Supportingtext3>
                    Securely store your personal data in an your encrypted vault and share
                    easily.{' '}
                  </StyledC.Supportingtext3>
                </StyledC.Div12>
              </StyledC.Featuretext>
            </StyledC.Div11>
            <StyledC.Div13>
              <div>
                <StyledC.Img8
                  loading="lazy"
                  src="assets/features/svg/red-shield.svg"
                />
                <StyledC.Div14>
                  <StyledC.Text4>Verify and Share Your Data</StyledC.Text4>
                  <StyledC.Supportingtext4>
                    Verify your data on VaultKit to show credibility to companies, for personal
                    and professional use.
                  </StyledC.Supportingtext4>
                </StyledC.Div14>
              </div>
            </StyledC.Div13>
            <StyledC.Div15>
              <div>
                <StyledC.Img9
                  loading="lazy"
                  src="assets/features/svg/red-link.svg"
                />
                <StyledC.Div16>
                  <StyledC.Text5>Handle Data Requests</StyledC.Text5>
                  <StyledC.Supportingtext5>
                    Approve or deny data requests quickly and securely.
                  </StyledC.Supportingtext5>
                </StyledC.Div16>
              </div>
            </StyledC.Div15>
            <StyledC.Div17>
              <div>
                <StyledC.Img10
                  loading="lazy"
                  src="assets/features/svg/red-chart.svg"
                />
                <StyledC.Div18>
                  <StyledC.Text6>Gain Insights</StyledC.Text6>
                  <StyledC.Supportingtext6>
                    Approve or deny data requests quickly and securely.
                  </StyledC.Supportingtext6>
                </StyledC.Div18>
              </div>
            </StyledC.Div17>
            <StyledC.Div19>
              <div>
                <StyledC.Img11
                  loading="lazy"
                  src="assets/features/svg/red-arrows.svg"
                />
                <StyledC.Div20>
                  <StyledC.Text7>Share data updates</StyledC.Text7>
                  <StyledC.Supportingtext7>
                    Notify & get notified of data changes.
                  </StyledC.Supportingtext7>
                </StyledC.Div20>
              </div>
            </StyledC.Div19>
          </StyledC.Div10>
        </StyledC.Column2>
      </StyledC.Div5>
    </Box>
  </StyledC.FeaturesForIndividuals>
  )

export default FeatureSection
