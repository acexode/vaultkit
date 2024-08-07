/* eslint-disable no-shadow */

// material
import { Box, Grid, Card, alpha, styled, useTheme, Container, Typography, useMediaQuery } from '@mui/material';

import Iconify from 'src/components/iconify';
import MotionInView from 'src/components/common/MotionInView';
import { varFadeInUp, varFadeInDown } from 'src/components/common/animate/variants/actions';

const steps = [
  {
    title: 'Sign Up and Complete Your Profile',
    icon: 'mdi:account-circle-outline',
    description: 'Create an account and fill in your personal, contact, educational, employment, financial, and residential history information.',
  },
  {
    title: 'Verify Your Data',
    icon: 'mdi:user-check-outline',
    description: 'Ensure the accuracy of your data through our verification process, making it trustworthy and secure for sharing.',
  },
  {
    title: 'Set Permissions and Share',
    icon: 'mdi:settings-transfer-outline',
    description: 'Control what data you want to share, with whom, and for how long. Set permissions for view-only or view and download access.',
  },
  {
    title: 'Respond to Data Requests',
    icon: 'charm:git-request',
    description: 'Receive and review data requests from other users or organizations. Approve or decline requests based on your preference.',
  },
  {
    title: 'Manage and Track Data Sharing',
    icon: 'icon-park-outline:data-lock',
    description: 'Keep track of who has access to your data, monitor sharing activity, and revoke permissions as needed.',
  },
  {
    title: 'Analyze Data Usage',
    icon: 'mdi:chart-bar',
    description: 'Get insights into how your data is being used with detailed analytics and reports.',
  }
];


const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function HowItWorks() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              VaultKit
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
             How it works
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {steps.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter')}>
                  <CardIconStyle
                   
                    sx={{
              
                      filter: (theme) => shadowIcon(theme.palette.error.main)
                      
                    }}
                  >
                    <Iconify icon={card.icon} width={40} />
                    </CardIconStyle>
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
