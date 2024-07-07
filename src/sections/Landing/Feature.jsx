/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';

// material
import {
  Box,
  Grid,
  Card,
  Link,
  Stack,
  alpha,
  // Button,
  styled,
  Divider,
  useTheme,
  Container,
  Typography,
} from '@mui/material';
//

// import Iconify from 'src/components/iconify';
import MotionInView from 'src/components/common/MotionInView';
import {
  // varFadeIn,
  varFadeInUp,
  varFadeInDown,
} from 'src/components/common/animate/variants/actions';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    category: 'Personal Info',
    commons: ['Full name', 'Date of birth', 'Gender'],
    options: ['Nationality', 'Marital status', 'Languages spoken', 'Social security number'],
    icons: [
      'fxemoji:email',
      '/static/home/ic_dob.svg',
      '/static/home/ic_gender.svg',
      '/static/home/ic_nationality.svg',
    ],
  },
  {
    category: 'Contact Info',
    commons: ['Email address', 'Phone number', 'Mailing address'],
    options: [
      'Emergency contacts',
      'Alternate phone number',
      'Fax number',
      'Social media profiles',
    ],
    icons: [
      '/static/home/ic_email.svg',
      '/static/home/ic_phone.svg',
      '/static/home/ic_address.svg',
      '/static/home/ic_social_media.svg',
    ],
  },
  {
    category: 'Educational Background',
    commons: ['Highest degree', 'Institutions attended', 'Graduation dates'],
    options: [
      'Certifications',
      'Awards and honors',
      'Research publications',
      'Extracurricular activities',
    ],
    icons: [
      '/static/home/ic_degree.svg',
      '/static/home/ic_institutions.svg',
      '/static/home/ic_graduation.svg',
      '/static/home/ic_certifications.svg',
    ],
  },
  {
    category: 'Financial Info',
    commons: ['Bank accounts', 'Credit score', 'Income'],
    options: ['Investments', 'Loans', 'Tax returns', 'Insurance policies'],
    icons: [
      '/static/home/ic_bank.svg',
      '/static/home/ic_credit_score.svg',
      '/static/home/ic_income.svg',
      '/static/home/ic_investments.svg',
    ],
  },
  {
    category: 'Residential Histories',
    commons: ['Current address', 'Previous addresses', 'Duration of stay'],
    options: ['Landlord references', 'Rental agreements', 'Utility bills', 'Property ownership'],
    icons: [
      '/static/home/ic_current_address.svg',
      '/static/home/ic_previous_address.svg',
      '/static/home/ic_duration.svg',
      '/static/home/ic_landlord_references.svg',
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

PlanCard.propTypes = {
  cardIndex: PropTypes.number,
  plan: PropTypes.shape({
    category: PropTypes.any,
    commons: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
  }),
};

function PlanCard({ plan, cardIndex }) {
  const theme = useTheme();
  const { category, commons, options } = plan;

  const isLight = theme.palette.mode === 'light';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`,
        ...(cardIndex === 1 && {
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(
              isLight ? theme.palette.grey[500] : theme.palette.common.black,
              0.48
            )}`,
        }),
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
            Category
          </Typography>
          <Typography variant="h4">{category}</Typography>
        </div>
        {/* 
        {cardIndex === 0 ? (
          <Iconify icon={icons[0]} width={40}  />
        ) : (
          <Stack direction="row" spacing={1}>
            {icons.map((icon) => (
              <Box key={icon} component="img" src={icon} sx={{ width: 40, height: 40 }} />
            ))}
          </Stack>
        )} */}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Box
                component={Icon}
                icon={checkmarkFill}
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option, optionIndex) => {
            const disabledLine =
              (cardIndex === 0 && optionIndex === 1) ||
              (cardIndex === 0 && optionIndex === 2) ||
              (cardIndex === 0 && optionIndex === 3) ||
              (cardIndex === 1 && optionIndex === 3);

            return (
              <Stack
                spacing={1.5}
                direction="row"
                alignItems="center"
                sx={{
                  ...(disabledLine && { color: 'text.disabled' }),
                }}
                key={option}
              >
                <Box
                  component={Icon}
                  icon={checkmarkFill}
                  sx={{
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(disabledLine && { color: 'text.disabled' }),
                  }}
                />
                <Typography variant="body2">{option}</Typography>
              </Stack>
            );
          })}
        </Stack>

        <Stack direction="row" justifyContent="flex-end">
          <Link
            color="text.secondary"
            underline="always"
            target="_blank"
            href="/faq"
            sx={{
              typography: 'body2',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Learn more <Icon icon={chevronRightFill} width={20} height={20} />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

export default function LandingPricingPlans() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
              Features
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
            Explore our platform&apos;s features
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary',
              }}
            >
              Our platform provides comprehensive tools and resources to manage and share your
              personal, contact, educational, financial, and residential information securely and
              efficiently.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={5}>
          {FEATURES.map((plan, index) => (
            <Grid key={plan.license} item xs={12} md={4}>
              <MotionInView variants={index === 1 ? varFadeInDown : varFadeInUp}>
                <PlanCard plan={plan} cardIndex={index} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>

       
      </Container>
    </RootStyle>
  );
}
