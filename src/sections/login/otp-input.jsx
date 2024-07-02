import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

const OTPInput = ({ length = 4, onComplete }) => {
  const theme = useTheme();

  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };
  const inputRef = useRef(Array(length).fill(null));
  const [OTP, setOTP] = useState(Array(length).fill(''));

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== '')) {
      onComplete(newPin.join(''));
    }
  };
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Verify OTP
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5, textAlign: 'center' }}>
            Enter the otp code sent to your device
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Resend
            </Link>
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
            {Array.from({ length }, (_, index) => (
              <TextField
                key={index}
                type="text"
                maxLength={1}
                value={OTP[index]}
                onChange={(e) => handleTextChange(e.target.value, index)}
                ref={(ref) => {
                  inputRef.current[index] = ref;
                }}
                // className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5 outline-none`}
                style={{ marginRight: index === length - 1 ? '0' : '10px', textAlign: 'center', borderRadius: 'none' }}
              />
            ))}
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleClick}
          >
           Complete Login
          </LoadingButton>
        </Card>
      </Stack>
    </Box>
  );
};

OTPInput.propTypes = {
  length: PropTypes.number,
  onComplete: PropTypes.func,
};

export default OTPInput;
