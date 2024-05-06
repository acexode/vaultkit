// material

// import { useTheme } from "@emotion/react";

import { Box } from "@mui/material";

 import hero from './hero.png'
// ----------------------------------------------------------------------

export default function SeoIllustration({ ...other }) {
  // const theme = useTheme();
  // const PRIMARY_LIGHTER = theme.palette.primary.lighter;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;
  // const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>
     <img src={hero} alt="Hero img"  />
    </Box>
  );
}
