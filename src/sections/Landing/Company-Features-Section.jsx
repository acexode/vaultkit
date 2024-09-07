import React from 'react';

import { Box, Grid } from '@mui/material';

import MHidden from 'src/components/common/MHidden';

import * as StyledC from './LandingStyled';

const CompanyFeaturesSection = () => (
  <StyledC.FeaturesForCompanies>
    <StyledC.Div21>
      <StyledC.Div22>
        <StyledC.Badgegroup2>
          <StyledC.Badge>
            <div>FOR COMPANIES</div>
          </StyledC.Badge>
        </StyledC.Badgegroup2>
        <StyledC.Heading3>
          Why your{' '}
          <StyledC.VerifiedText fontWeight="600" sx={{ color: 'rgba(255,87,87,1)' }}>
            company
          </StyledC.VerifiedText>{' '}
          needs VaultKit
        </StyledC.Heading3>
        <StyledC.Supportingtext8>
          Our system not only ensures that companies receive accurate and verified data, but it also
          empowers users to have full control over their personal information.
        </StyledC.Supportingtext8>
      </StyledC.Div22>
    </StyledC.Div21>
    <Grid container sx={{ marginTop: '64px', position: 'relative', width: '100%' }}>
      <MHidden width="mdDown">
        <Box
          component="img"
          src="assets/ellipse-light.svg"
          sx={{ position: 'absolute', top: '5%', zIndex: '1', left: '30%', borderRadius: '50%', width: '40%' }}
        />
      </MHidden>
      <Grid
        item
        px={2}
        sx={{ minHeight: '158px', zIndex: '10', borderRight: '1px dashed #575757' }}
        xs={12}
        md={4}
      >
        <StyledC.Div26>
          <StyledC.Featuretext6>
            <StyledC.Img12 loading="lazy" src="assets/features/svg/red-info.svg" />
            <StyledC.Div27>
              <StyledC.Text8>Request Data Easily</StyledC.Text8>
              <StyledC.Supportingtext9>
                Send secure data requests to users with just a few clicks.
              </StyledC.Supportingtext9>
            </StyledC.Div27>
          </StyledC.Featuretext6>
        </StyledC.Div26>
      </Grid>
      <Grid
        item
        px={2}
        sx={{ minHeight: '158px', zIndex: '10', borderRight: '1px dashed #575757' }}
        xs={12}
        md={4}
      >
        <StyledC.Div26>
          <StyledC.Featuretext6>
            <StyledC.Img12 loading="lazy" src="assets/features/svg/red-organization.svg" />
            <StyledC.Div30>
              <StyledC.Text8>Receive Verified Data</StyledC.Text8>
              <StyledC.Supportingtext10>
                Access up-to-date, verified data from users, enhancing your data accuracy.
              </StyledC.Supportingtext10>
            </StyledC.Div30>
          </StyledC.Featuretext6>
        </StyledC.Div26>
      </Grid>

      <Grid item px={2} sx={{ minHeight: '158px' }} xs={12} md={4}>
        <StyledC.Div26>
          <StyledC.Featuretext6>
            <StyledC.Img12 loading="lazy" src="assets/features/svg/red-link.svg" />
            <StyledC.Div36>
              <StyledC.Text8>Enhance Compliance</StyledC.Text8>
              <StyledC.Supportingtext12>
                Ensure your data collection and management processes meet regulatory requirements
              </StyledC.Supportingtext12>
            </StyledC.Div36>
          </StyledC.Featuretext6>
        </StyledC.Div26>
      </Grid>
    </Grid>
    <Grid container sx={{ marginTop: '64px' }} justifyContent="center">
      <Grid
        item
        px={2}
        sx={{ minHeight: '158px', zIndex: '10', borderRight: '1px dashed #575757' }}
        xs={12}
        md={4}
      >
        <StyledC.Div26>
          <StyledC.Featuretext6>
            <StyledC.Img12 loading="lazy" src="assets/features/svg/red-shield.svg" />
            <StyledC.Div32>
              <StyledC.Text8>Stay Informed</StyledC.Text8>
              <StyledC.Supportingtext11>
                Get notifications whenever users update their data, ensuring you always have the
                latest information.
              </StyledC.Supportingtext11>
            </StyledC.Div32>
          </StyledC.Featuretext6>
        </StyledC.Div26>
      </Grid>
      <Grid item px={2} sx={{ minHeight: '158px' }} xs={12} md={4}>
        <StyledC.Div26>
          <StyledC.Featuretext6>
            <StyledC.Img12 loading="lazy" src="assets/features/svg/red-shield.svg" />
            <StyledC.Div38>
              <StyledC.Text8>Build Trust</StyledC.Text8>
              <StyledC.Supportingtext13>
                Foster trust with users through secure and transparent data practices.
              </StyledC.Supportingtext13>
            </StyledC.Div38>
          </StyledC.Featuretext6>
        </StyledC.Div26>
      </Grid>
    </Grid>
  </StyledC.FeaturesForCompanies>
);

export default CompanyFeaturesSection;
