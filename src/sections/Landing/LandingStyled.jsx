import { motion } from 'framer-motion';

import { Box, Grid, Stack, Button, styled } from '@mui/material';

import Page from 'src/components/common/Page';

export const LandingPageDesktop = styled(Page)({
  height: '100%',
});

export const VerifiedText = styled('span')(({ theme, fontWeight }) => ({
  fontFamily: 'Petrona, sans-serif',
  fontStyle: 'italic',
  lineheight: '77px',
  color: 'rgba(255,35,35,1)',
  fontWeight,
}));

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '80px',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img = styled('img')({
  aspectRatio: '3.75',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '120px',
  alignSelf: 'stretch',
  margin: 'auto 0',
});

export const Hero = styled(motion.div)(({ theme }) => ({
  background: 'var(--BG1, linear-gradient(180deg, #fbf6e7 53.15%, #fff 100%))',
  backgroundColor: 'var(--BG1, linear-gradient(180deg, #fbf6e7 53.15%, #fff 100%))',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  alignItems: 'center',
  fontWeight: 500,
  padding: '170px 80px 27px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '100px 20px 0',
  },
}));
export const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  // maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

export const HeroTextHolder = styled(Box)(({ theme }) => ({
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Heading = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-950, #101010)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-1.92px',
  font: '64px/70px Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
    lineHeight: '44px',
    letterSpacing: '-1.2px',
  },
}));

export const Supportingtext = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-800, #343434)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.36px',
  alignSelf: 'center',
  marginTop: '16px',
  width: '566px',
  font: '18px/27px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const ActionWrapper = styled(Box)({
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '100%',
  alignItems: 'flex-start',
  gap: '5px',
  flexWrap: 'wrap',
  font: '18px/2 Matter, sans-serif',
  // marginTop: '0px !important'
});

export const CurlyArrow = styled('img')({
  aspectRatio: '2.97',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '104px',
  strokeWidth: '4px',
  stroke: 'var(--Red-Red-400, #ff5757)',
  backdropFilter: 'blur(12px)',
  alignSelf: 'start',
  maxWidth: '100%',
});

export const Actions = styled(Box)({
  alignSelf: 'end',
  display: 'flex',
  marginTop: '31.6px',
  alignItems: 'start',
  gap: '12px',
  //   justifyContent: 'start',
  //   flexGrow: 1,
  flexBasis: 'auto',
});

export const GetStarted = styled(Button)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  color: 'var(--White, #fff)',
  justifyContent: 'start',
});

export const GetStartedBase = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-300, #ff9494)',
  background: 'var(--Red-Red-500, #ff2323)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-500, #ff2323)',
  gap: '8px',
  overflow: 'hidden',
  padding: '16px 28px',
}));

export const RequestDemo = styled(Button)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  color: 'var(--Grey-Grey-800, #343434)',
  justifyContent: 'start',
});

export const RequestDemoBase = styled(Box)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-300, #ff9494)',
  background: 'var(--Grey-Grey-25, #fafafa)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Grey-Grey-25, #fafafa)',
  display: 'flex',
  gap: '12px',
  overflow: 'hidden',
  padding: '16px 28px',
}));

export const DemoIcon = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  alignSelf: 'stretch',
  margin: 'auto 0',
});

export const Text = styled(Box)({
  alignSelf: 'stretch',
  margin: 'auto 0',
});

export const Img4 = styled('img')(({ theme }) => ({
  //   aspectRatio: '2.04',
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  margin: '30px 18px 0 17px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginRight: '10px',
  },
}));

export const FeaturesForIndividuals = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #fbf6e7 53.15%, #fff 100%)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '65px 152px 70px 119px',
  marginBottom: '44px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '0 20px',
  },
}));

export const Div5 = styled(Box)(({ theme }) => ({
  gap: '87px',
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '0px',
  },
}));

export const Column = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '59%',
  marginLeft: '0px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
export const Column2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '41%',
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: '0px',
  },
}));

export const Div6 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '69px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginTop: '40px',
  },
}));

export const Div7 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div8 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  fontWeight: 500,
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Badgegroup = styled(Box)({
  display: 'flex',
  padding: '4px',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '16px',
  background: 'var(--Red-Red-50, #fff0f0)',
  mixBlendMode: 'multiply',
  width: 'fit-content',
  color: 'var(--Red-Red-700, #d70000)',
  textTransform: 'uppercase',
  letterSpacing: '0.56px',
  justifyContent: 'start',
  font: '14px/1.2 Matter, sans-serif',
});

export const Badge = styled(Box)({
  display: 'flex',
  padding: '4px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  border: '2px solid var(--Red-Red-200, #ffc0c0)',
  backgroundColor: 'var(--Grey-Grey-25, #fafafa)',
  color: 'var(--Red-Red-700, #D70000)',
  fontfamily: 'Matter',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '0.56px',
  textTransform: 'uppercase',
});

export const Div9 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Heading2 = styled(Box)(({ theme }) => ({
  color: '#000',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.56px',
  font: ' 56px/67px Neue Montreal, -apple-system, Roboto, Helvetica, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
    lineHeight: '54px',
  },
}));

export const Supportingtext2 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-700, #474747)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.36px',
  marginTop: '16px',
  font: '18px/27px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Avatargroup = styled(Box)({
  display: 'flex',
  marginTop: '24px',
  width: '220px',
  maxWidth: '100%',
  paddingRight: '12px',
  alignItems: 'start',
  gap: '8px',
  justifyContent: 'start',
});

export const Img5 = styled('img')({
  aspectRatio: '5.21',
  objectFit: 'contain',
  objectPosition: 'center',
  width: '208px',
  gap: '-12px',
});

export const Actions2 = styled(Box)({
  alignSelf: 'start',
  display: 'flex',
  marginTop: '28px',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
  font: '500 18px/2 Matter, sans-serif',
});

export const Button10 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  color: 'var(--White, #fff)',
  justifyContent: 'start',
});

export const Buttonbase10 = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-300, #ff9494)',
  background: 'var(--Red-Red-500, #ff2323)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-500, #ff2323)',
  gap: '8px',
  overflow: 'hidden',
  padding: '16px 28px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Button11 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  color: 'var(--Grey-Grey-800, #343434)',
  justifyContent: 'start',
});

export const Buttonbase11 = styled(Box)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-300, #ff9494)',
  background: 'var(--Grey-Grey-25, #fafafa)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Grey-Grey-25, #fafafa)',
  display: 'flex',
  gap: '12px',
  overflow: 'hidden',
  padding: '16px 28px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Img6 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  alignSelf: 'stretch',
  margin: 'auto 0',
});

export const Div10 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  fontWeight: 500,
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginTop: '40px',
  },
}));

export const Div11 = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid var(--Grey-Grey-50, #f6f6f6)',
  backgroundColor: '#fff',
  display: 'flex',
  minHeight: '198px',
  maxWidth: '100%',
  width: 'inherit',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '25px 16px 25px 32px',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
    width: 'inherit'
  },
}));

export const Featuretext = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Img7 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '56px',
});

export const Div12 = styled(Box)({
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text3 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext3 = styled(Box)({
  color: 'var(--Grey-Grey-600, #575757)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '16px/24px Matter, sans-serif',
});

export const Div13 = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid var(--Red-Red-100, #fdd)',
  backgroundColor: '#fff',
  display: 'flex',
  marginTop: '16px',
  minHeight: '198px',
  maxWidth: '100%',
  width: 'inherit',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '25px 16px 25px 32px',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
    width: 'inherit'
  },
}));

export const Img8 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '56px',
});

export const Div14 = styled(Box)({
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text4 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext4 = styled(Box)({
  color: 'var(--Grey-Grey-600, #575757)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '16px/24px Matter, sans-serif',
});

export const Div15 = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid var(--Red-Red-100, #fdd)',
  backgroundColor: '#fff',
  display: 'flex',
  marginTop: '16px',
  minHeight: 'inherit',
  maxWidth: '100%',
  width: '444px',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '22px 16px 22px 32px',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
    width: 'inherit'
  },
}));

export const Img9 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '56px',
});

export const Div16 = styled(Box)({
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text5 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext5 = styled(Box)({
  color: 'var(--Grey-Grey-600, #575757)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '16px Matter, sans-serif',
});

export const Div17 = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid var(--Red-Red-100, #fdd)',
  backgroundColor: '#fff',
  display: 'flex',
  marginTop: '16px',
  minHeight: '175px',
  maxWidth: '100%',
  width: 'inherit',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '25px 16px 25px 32px',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
  },
}));

export const Img10 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '56px',
});

export const Div18 = styled(Box)({
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text6 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext6 = styled(Box)({
  color: 'var(--Grey-Grey-600, #575757)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '16px Matter, sans-serif',
});

export const Div19 = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid var(--Red-Red-100, #fdd)',
  backgroundColor: '#fff',
  display: 'flex',
  marginTop: '16px',
  minHeight: '175px',
  maxWidth: '100%',
  width: 'inherit',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '25px 16px 25px 32px',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
  },
}));

export const Img11 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '56px',
});

export const Div20 = styled(Box)({
  display: 'flex',
  marginTop: '8px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text7 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext7 = styled(Box)({
  color: 'var(--Grey-Grey-600, #575757)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '16px Matter, sans-serif',
});

export const FeaturesForCompanies = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  background: 'var(--Grey-Grey-950, #101010)',
  backgroundColor: 'var(--Grey-Grey-950, #101010)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'start',
  padding: '96px 0',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div21 = styled(Box)({
  display: 'flex',
  width: '638px',
  maxWidth: '100%',
  flexDirection: 'column',
  fontFamily: 'Matter, sans-serif',
  fontWeight: 500,
  justifyContent: 'start',
});

export const Div22 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Badgegroup2 = styled(Box)({
  alignItems: 'center',
  borderRadius: '24px',
  background: 'var(--Red-Red-50, #fff0f0)',
  backgroundColor: 'var(--Red-Red-50, #fff0f0)',
  display: 'flex',
  gap: '12px',
  fontSize: '14px',
  color: 'var(--Red-Red-700, #d70000)',
  textTransform: 'uppercase',
  letterSpacing: '0.56px',
  lineHeight: 1.2,
  justifyContent: 'start',
  padding: '4px',
});

export const Heading3 = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#fff',
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.56px',
  marginTop: '16px',
  font: 'italic 56px/67px Neue Montreal, -apple-system, Roboto, Helvetica, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
    lineHeight: '54px',
  },
}));

export const Supportingtext8 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-50, #f6f6f6)',
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.32px',
  marginTop: '16px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div23 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '64px',
  maxWidth: '100%',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
  },
}));


export const Column3 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '32%',
  marginLeft: '0px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Div26 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  gap: '8px',
  fontWeight: 500,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
  },
}));

export const Featuretext6 = styled(Box)({
  display: 'flex',
  minHeight: '158px',
  flexDirection: 'column',
  justifyContent: 'start',
  flexGrow: 1,
  flexBasis: 0,
  width: 'fit-content',
});

export const Img12 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '48px',
  alignSelf: 'center',
});

export const Div27 = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Text8 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  alignSelf: 'center',
  font: '24px/1.2 Neue Montreal, sans-serif',
});

export const Supportingtext9 = styled(Box)({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.14px',
  marginTop: '8px',
  font: '14px/21px Matter, sans-serif',
});



export const Column4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '68%',
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));







export const Div30 = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});



export const Supportingtext10 = styled(Box)({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.14px',
  marginTop: '8px',
  font: '14px/21px Matter, sans-serif',
});




export const Div32 = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});



export const Supportingtext11 = styled(Box)({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.14px',
  marginTop: '8px',
  font: '14px/21px Matter, sans-serif',
});


export const Column5 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '50%',
  marginLeft: '0px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Div36 = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});



export const Supportingtext12 = styled(Box)({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.14px',
  marginTop: '8px',
  font: '14px/21px Matter, sans-serif',
});


export const Column6 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  width: '50%',
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));


export const Div38 = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});


export const Supportingtext13 = styled(Box)({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.14px',
  marginTop: '8px',
  font: '14px/21px Matter, sans-serif',
});

export const HowitWorks = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 246, 240, 1)',
  display: 'flex',
  minHeight: '748px',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  alignItems: 'center',
  fontWeight: 500,
  justifyContent: 'center',
  padding: '70px 0',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const HowitWorksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const HowitWorksContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Headingandsupportingtext = styled(Box)({
  display: 'flex',
  minHeight: '608px',
  width: '768px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Div39 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Headingandbadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Badgegroup3 = styled(Box)({
  alignItems: 'center',
  borderRadius: '24px',
  background: 'var(--Red-Red-50, #fff0f0)',
  backgroundColor: 'var(--Red-Red-50, #fff0f0)',
  alignSelf: 'center',
  display: 'flex',
  width: '150px',
  maxWidth: '100%',
  gap: '12px',
  color: 'var(--Red-Red-700, #d70000)',
  textTransform: 'uppercase',
  letterSpacing: '0.56px',
  justifyContent: 'start',
  padding: '4px 10px 4px 4px',
  font: '14px/1.2 Matter, sans-serif',
});

export const Heading4 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-950, #101010)',
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.56px',
  marginTop: '4px',
  font: '56px/67px Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
    lineHeight: '54px',
  },
}));

export const Supportingtext14 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-700, #474747)',
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.36px',
  alignSelf: 'center',
  marginTop: '8px',
  width: '608px',
  font: '18px/27px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const HowItWorksGrid = styled(Grid)(({ theme }) => ({
  alignSelf: 'center',
  display: 'flex',
  marginTop: '40px',
  alignItems: 'center',
  gap: '24px',
  color: 'var(--Grey-Grey-50, #f6f6f6)',
  textAlign: 'center',
  letterSpacing: '-0.32px',
  justifyContent: 'start',
  flex: 1,
  flexWrap: 'wrap',
  height: '100%',
  font: '32px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div41 = styled(Box)({
  borderRadius: '8px',
  alignSelf: 'stretch',
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  width: '339px',
  margin: 'auto 0',
});

export const Div42 = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  background: 'var(--Grey-Grey-900, #1f1f1f)',
  backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '26px 52px 112px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px 100px',
  },
}));

export const Heading5 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
});

export const Heading6 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  marginTop: '59px',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
  },
}));

export const Supportingtext15 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-200, #c8c8c8)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  alignSelf: 'stretch',
  margin: '16px 0 -22px',
  font: '16px/24px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    marginBottom: '10px',
  },
}));

export const Div43 = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
  width: '124px',
  margin: 'auto 0',
  padding: '0 1px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Heading7 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  borderRadius: '8px',
  background: 'var(--Grey-Grey-900, #1f1f1f)',
  backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
  padding: '29px 43px 228px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
    padding: '0 20px 110px',
  },
}));

export const Div44 = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
  width: '124px',
  margin: 'auto 0',
  padding: '0 1px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Heading8 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  borderRadius: '8px',
  background: 'var(--Grey-Grey-900, #1f1f1f)',
  backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
  padding: '29px 43px 228px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
    padding: '0 20px 110px',
  },
}));

export const Div45 = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
  width: '124px',
  margin: 'auto 0',
  padding: '0 1px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Heading9 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  borderRadius: '8px',
  background: 'var(--Grey-Grey-900, #1f1f1f)',
  backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
  padding: '29px 43px 228px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
    padding: '0 20px 110px',
  },
}));

export const Pricingsection = styled(Box)(({ theme }) => ({
  background: 'var(--White, #fff)',
  backgroundColor: 'var(--White, #fff)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  fontWeight: 500,
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Headersection = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  background: 'var(--White, #fff)',
  backgroundColor: 'var(--White, #fff)',
  display: 'flex',
  minHeight: '304px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '96px 0 28px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Container3 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Content3 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Headingandsupportingtext2 = styled(Box)({
  display: 'flex',
  width: '768px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Headingandsubheading = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  lineHeight: 1.2,
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Badgegroup4 = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  borderRadius: '16px',
  background: 'var(--Red-Red-50, #fff0f0)',
  mixBlendMode: 'multiply',
  backgroundColor: 'var(--Red-Red-50, #fff0f0)',
  display: 'flex',
  width: '90px',
  gap: '12px',
  color: 'var(--Red-Red-700, #d70000)',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
  letterSpacing: '0.56px',
  justifyContent: 'start',
  padding: '4px',
  font: '14px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Heading10 = styled(Box)(({ theme }) => ({
  color: 'var(--Red-Red-500, #ff2323)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.56px',
  marginTop: '12px',
  font: 'italic 56px Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
  },
}));

export const Supportingtext16 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-700, #474747)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.4px',
  marginTop: '8px',
  font: '20px/30px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Section = styled(Box)(({ theme }) => ({
  paddingBottom: '96px',
  alignItems: 'center',
  background: 'var(--White, #fff)',
  backgroundColor: 'var(--White, #fff)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Container4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Content4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  gap: '32px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Pricingtiercard = styled(Box)({
  borderRadius: '16px',
  border: '1px solid var(--Gray-200, #e4e7ec)',
  background: 'var(--White, #fff)',
  boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  backgroundColor: 'var(--White, #fff)',
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
});

export const Header2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'start',
  padding: '40px 32px 0',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Price = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  width: '100%',
  color: 'var(--Gray-900, #101828)',
  whiteSpace: 'nowrap',
  letterSpacing: '-0.48px',
  padding: '2px 70px',
  font: '48px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    whiteSpace: 'initial',
    padding: '0 20px',
  },
}));

export const Headingandsupportingtext3 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  marginTop: '16px',
  width: '100%',
  color: 'var(--Grey-Grey-900, #1f1f1f)',
  letterSpacing: '-0.4px',
  font: '20px Matter, sans-serif',
});

export const Content5 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: 'var(--Grey-Grey-600, #575757)',
  justifyContent: 'start',
  padding: '32px 32px 40px',
  font: '16px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Checkitems = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Checkitemtext = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img17 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text13 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext2 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img18 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text14 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext3 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img19 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text15 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext4 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img20 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text16 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext5 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img21 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text17 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: 'var(--White, #fff)',
  textAlign: 'center',
  justifyContent: 'start',
  padding: '0 32px 32px',
  font: '18px/2 Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Actions3 = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Button12 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  justifyContent: 'start',
});

export const Buttonbase12 = styled(Box)({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-200, #ffc0c0)',
  background: 'var(--Red-Red-500, #ff2323)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-500, #ff2323)',
  minWidth: '240px',
  width: '100%',
  gap: '8px',
  overflow: 'hidden',
  flex: 1,
  padding: '12px 20px',
});

export const Header3 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '40px 32px 0',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Headingandsupportingtext4 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  marginTop: '16px',
  width: '100%',
  color: 'var(--Grey-Grey-900, #1f1f1f)',
  textAlign: 'center',
  letterSpacing: '-0.4px',
  font: '20px Matter, sans-serif',
});

export const Content6 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: 'var(--Grey-Grey-600, #575757)',
  justifyContent: 'start',
  padding: '32px 32px 40px',
  font: '16px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Img22 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text18 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext7 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img23 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text19 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext8 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img24 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text20 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext9 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img25 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text21 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext10 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img26 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text22 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Actions4 = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Button13 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  justifyContent: 'start',
});

export const Buttonbase13 = styled(Box)({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-200, #ffc0c0)',
  background: 'var(--Red-Red-500, #ff2323)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-500, #ff2323)',
  minWidth: '240px',
  width: '100%',
  gap: '8px',
  overflow: 'hidden',
  flex: 1,
  padding: '12px 20px',
});

export const Header4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '40px 32px 0',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Headingandsupportingtext5 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  marginTop: '16px',
  width: '100%',
  color: 'var(--Grey-Grey-900, #1f1f1f)',
  textAlign: 'center',
  letterSpacing: '-0.4px',
  font: '20px Matter, sans-serif',
});

export const Content7 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: 'var(--Grey-Grey-600, #575757)',
  justifyContent: 'start',
  padding: '32px 32px 40px',
  font: '16px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Img27 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text23 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext12 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img28 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text24 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext13 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img29 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text25 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext14 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img30 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text26 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Checkitemtext15 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  alignItems: 'start',
  gap: '12px',
  justifyContent: 'start',
});

export const Img31 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
  fill: 'var(--Success-100, #d1fadf)',
});

export const Text27 = styled(Box)({
  minWidth: '240px',
  flex: 1,
});

export const Actions5 = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Button14 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  justifyContent: 'start',
});

export const Buttonbase14 = styled(Box)({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-200, #ffc0c0)',
  background: 'var(--Red-Red-500, #ff2323)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-500, #ff2323)',
  minWidth: '240px',
  width: '100%',
  gap: '8px',
  overflow: 'hidden',
  flex: 1,
  padding: '12px 20px',
});

export const FaQsection = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  background: 'var(--Grey-Grey-950, #101010)',
  backgroundColor: 'var(--Grey-Grey-950, #101010)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'start',
  padding: '96px 0',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div46 = styled(Box)({
  display: 'flex',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Container5 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  fontFamily: 'Matter, sans-serif',
  color: 'var(--Grey-Grey-50, #f6f6f6)',
  fontWeight: 500,
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '0 20px',
  },
}));

export const Content8 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Headingandsupportingtext6 = styled(Box)({
  display: 'flex',
  width: '768px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Badgegroup5 = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  borderRadius: '24px',
  background: 'var(--Red-Red-50, #fff0f0)',
  backgroundColor: 'var(--Red-Red-50, #fff0f0)',
  alignSelf: 'center',
  display: 'flex',
  width: '78px',
  gap: '12px',
  fontSize: '18px',
  color: 'var(--Red-Red-700, #d70000)',
  whiteSpace: 'nowrap',
  letterSpacing: '0.36px',
  lineHeight: 1,
  justifyContent: 'start',
  padding: '4px 6px 4px 4px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Heading11 = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.56px',
  marginTop: '8px',
  font: '56px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '40px',
  },
}));

export const Supportingtext17 = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '-0.32px',
  marginTop: '8px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Container6 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '72px',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginTop: '40px',
    padding: '0 20px',
  },
}));

export const Content9 = styled(Box)({
  display: 'flex',
  width: '768px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const FaQitem = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content10 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div47 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text28 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.24px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Supportingtext18 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-100, #ddd)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.32px',
  marginTop: '8px',
  font: '400 16px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Iconwrap = styled(Box)({
  display: 'flex',
  paddingTop: '2px',
  flexDirection: 'column',
  justifyContent: 'start',
  width: '24px',
});

export const Img32 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const FaQitem2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  background: 'var(--Grey-Grey-900, #1f1f1f)',
  backgroundColor: 'var(--Grey-Grey-900, #1f1f1f)',
  display: 'flex',
  minHeight: '1px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content11 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div48 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  letterSpacing: '-0.24px',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text29 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img33 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const FaQitem3 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content12 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div49 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  letterSpacing: '-0.24px',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text30 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img34 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const FaQitem4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content13 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div50 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  letterSpacing: '-0.24px',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text31 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img35 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const FaQitem5 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content14 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div51 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  letterSpacing: '-0.24px',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text32 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img36 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const FaQitem6 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content15 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  alignItems: 'start',
  gap: '24px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Div52 = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  letterSpacing: '-0.24px',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  font: '500 24px/1.2 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Text33 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Img37 = styled('img')({
  aspectRatio: 1,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '24px',
});

export const Container7 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '64px',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  fontWeight: 500,
  textAlign: 'center',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
    padding: '0 20px',
  },
}));

export const Content16 = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  borderRadius: '16px',
  background: 'var(--Red-Red-50, #fff0f0)',
  backgroundColor: 'var(--Red-Red-50, #fff0f0)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '32px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '0 20px',
  },
}));

export const Headingandsupportingtext7 = styled(Box)({
  display: 'flex',
  width: '768px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const Heading12 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-900, #1f1f1f)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.4px',
  font: '40px/1 Neue Montreal, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Supportingtext19 = styled(Box)(({ theme }) => ({
  color: 'var(--Grey-Grey-800, #343434)',
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.36px',
  alignSelf: 'center',
  marginTop: '8px',
  font: '18px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Actions6 = styled(Box)({
  display: 'flex',
  marginTop: '32px',
  alignItems: 'start',
  gap: '12px',
  color: 'var(--White, #fff)',
  justifyContent: 'start',
  font: '18px/2 Matter, sans-serif',
});

export const Button15 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
});

export const Buttonbase15 = styled(Box)({
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-600, #f00)',
  background: 'var(--Red-Red-600, #f00)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-600, #f00)',
  gap: '8px',
  overflow: 'hidden',
  padding: '10px 18px',
});

export const Footer4 = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  background: 'var(--White, #fff)',
  backgroundColor: 'var(--White, #fff)',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '64px 0 48px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Container8 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '0 32px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
}));

export const Content17 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  gap: '32px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Logoandlinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '240px',
  flexDirection: 'column',
  justifyContent: 'start',
  flex: 1,
  flexBasis: '0%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Logoandsupportingtext = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '320px',
  maxWidth: '100%',
  flexDirection: 'column',
  justifyContent: 'start',
}));

export const Logo = styled(Box)({
  display: 'flex',
  width: '153px',
  maxWidth: '100%',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'center',
  padding: '1px 0',
});

export const Img38 = styled('img')({
  aspectRatio: 3.83,
  objectFit: 'contain',
  objectPosition: 'center',
  width: '100%',
});

export const Supportingtext20 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  letterSpacing: '-0.4px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: '24px',
  font: '500 20px Matter, sans-serif',
});

export const Footerlinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  width: '100%',
  alignItems: 'start',
  gap: '32px',
  justifyContent: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Footerlink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'var(--Grey-Grey-800, #343434)',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  justifyContent: 'start',
  font: '500 16px/1.4 Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Buttonbase16 = styled(Box)(({ theme }) => ({
  textDecorationLine: 'underline',
  alignSelf: 'stretch',
  gap: '8px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Buttonbase17 = styled(Box)(({ theme }) => ({
  textDecorationLine: 'underline',
  alignSelf: 'stretch',
  gap: '8px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Footerlink3 = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'var(--Grey-Grey-800, #343434)',
  textAlign: 'center',
  justifyContent: 'start',
  font: '500 16px/1.4 Matter, sans-serif',
});

export const Buttonbase18 = styled(Box)({
  textDecorationLine: 'underline',
  alignSelf: 'stretch',
  gap: '8px',
});

export const Buttonbase19 = styled(Box)(({ theme }) => ({
  textDecorationLine: 'underline',
  alignSelf: 'stretch',
  gap: '8px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Buttonbase20 = styled(Box)(({ theme }) => ({
  textDecorationLine: 'underline',
  alignSelf: 'stretch',
  gap: '8px',
  [theme.breakpoints.down('md')]: {
    whiteSpace: 'initial',
  },
}));

export const Footerlink6 = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'start',
});

export const Appstoreactions = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Matter, sans-serif',
  fontWeight: 500,
  justifyContent: 'start',
  width: '153px',
});

export const Heading13 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  fontSize: '20px',
  letterSpacing: '-0.4px',
  background: 'linear-gradient(90deg, #8f6a31 0%, #ffd7c3 54.23%, #a47b66 91.58%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const Actions7 = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  width: '100%',
  maxWidth: '153px',
  flexDirection: 'column',
  fontSize: '16px',
  letterSpacing: '-0.32px',
  justifyContent: 'start',
});

export const Button22 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'start',
  color: 'var(--Grey-Grey-800, #343434)',
  justifyContent: 'start',
});

export const Buttonbase22 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Gray-300, #d0d5dd)',
  background: 'var(--White, #fff)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--White, #fff)',
  gap: '8px',
  overflow: 'hidden',
  padding: '12px 20px',
});

export const Button23 = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  marginTop: '12px',
  width: '100%',
  alignItems: 'start',
  color: 'var(--White, #fff)',
  justifyContent: 'start',
});

export const Buttonbase23 = styled(Box)({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  alignSelf: 'stretch',
  borderRadius: '8px',
  border: '1px solid var(--Red-Red-600, #f00)',
  background: 'var(--Red-Red-600, #f00)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  backgroundColor: 'var(--Red-Red-600, #f00)',
  width: '153px',
  gap: '8px',
  overflow: 'hidden',
  padding: '10px 18px',
});

export const Container9 = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '64px',
  width: '1280px',
  maxWidth: '100%',
  flexDirection: 'column',
  color: 'var(--Grey-Grey-800, #343434)',
  letterSpacing: '-0.32px',
  justifyContent: 'start',
  padding: '0 32px',
  font: '500 16px Matter, sans-serif',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
    padding: '0 20px',
  },
}));

export const Divider6 = styled(Box)(({ theme }) => ({
  background: 'var(--Gray-200, #e4e7ec)',
  backgroundColor: 'var(--Gray-200, #e4e7ec)',
  display: 'flex',
  minHeight: '1px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const Content18 = styled(Box)(({ theme }) => ({
  fontFeatureSettings: '"cv01" on, "cv03" on, "cv04" on',
  alignSelf: 'stretch',
  flex: 1,
  marginTop: '32px',
  width: '100%',
  gap: '32px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));
