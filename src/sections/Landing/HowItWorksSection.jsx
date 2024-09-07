import React, { useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import * as StyledC from './LandingStyled';

const items = [
  { index: '01', title: 'Request Data', text: 'Companies send data requests to users via email.' },
  { index: '02', title: 'Notify', text: 'Users receive email notifications about data requests.' },
  {
    index: '03',
    title: 'Sign up/Sign in',
    text: 'Users sign up or log in to VaultKit to manage their data.',
  },
  {
    index: '04',
    title: 'Approve',
    text: 'Users approve requests to securely share their verified data.',
  },
];

const HowItWorksSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const upMd = useResponsive('up', 'md');
    console.log(upMd);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  console.log('object');
  return (
    <StyledC.HowitWorks>
      <StyledC.HowitWorksContainer>
        <StyledC.HowitWorksContent>
          <StyledC.Headingandsupportingtext>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <StyledC.Headingandbadge>
                <StyledC.Badgegroup3>
                  <div>
                    <div>HOW IT WORKS</div>
                  </div>
                </StyledC.Badgegroup3>
                <StyledC.Heading4>
                  Simple to use. <br />
                  Get started in few easy steps.
                </StyledC.Heading4>
              </StyledC.Headingandbadge>
              <StyledC.Supportingtext14>
                VaultKit simplifies data management and sharing, ensuring information is always
                secure and easy to control.
              </StyledC.Supportingtext14>
            </Box>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: '40px', alignSelf: 'center', display: 'flex', color: 'var(--Grey-Grey-50, #f6f6f6)' }}
            >
              {items.map((_, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={hoveredIndex === index ? 6 : 2}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Box
                    sx={{
                      height: '337px',
                      background: 'var(--Grey-Grey-900, #1f1f1f)',
                      backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
                      transition: 'all 0.5s ease',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    //   paddingTop: '24px'
                    }}
                  >
                    <Box sx={{marginBottom: '59px'}}>Box {index + 1}</Box>

                    <Typography variant='body1' sx={{ 
                        transform: 'rotate(90deg)'
                    }}>Request Data</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <StyledC.HowItWorksGrid>
              <Grid container spacing={2}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Grid
                    item
                    key={index}
                    md={12}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      transition: 'flex-grow 0.3s ease',
                      flexGrow: hoveredIndex === index ? 1 : 0,
                      flexBasis: hoveredIndex === index ? '339px' : '124px',
                      height: '200px', // Adjust height as needed
                      background: 'var(--Grey-Grey-900, #1f1f1f)',
                      backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* <StyledC.Div42>
                  <StyledC.Heading5>01</StyledC.Heading5>
                 {hoveredIndex === index && 
                 <>
                     <StyledC.Heading6>Request Data</StyledC.Heading6>
                     <StyledC.Supportingtext15>
                       Companies send data requests to users via email.
                     </StyledC.Supportingtext15>
                 
                 </>
                 }
                </StyledC.Div42> */}
                  </Grid>
                ))}
              </Grid>
              <StyledC.Div41>
                <StyledC.Div42>
                  <StyledC.Heading5>01</StyledC.Heading5>
                  <StyledC.Heading6>Request Data</StyledC.Heading6>
                  <StyledC.Supportingtext15>
                    Companies send data requests to users via email.
                  </StyledC.Supportingtext15>
                </StyledC.Div42>
              </StyledC.Div41>
            </StyledC.HowItWorksGrid>
          </StyledC.Headingandsupportingtext>
        </StyledC.HowitWorksContent>
      </StyledC.HowitWorksContainer>
    </StyledC.HowitWorks>
  );
};

export default HowItWorksSection;
