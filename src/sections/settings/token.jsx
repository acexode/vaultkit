import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const EmailToken = ({ length = 6, onComplete, resendToken, tokenResent }) => {
  const inputRef = useRef(Array(length).fill(null));
  const [OTP, setOTP] = useState(Array(length).fill(''));

  const handleClick = () => {
    onComplete(OTP.join(''));
    setOTP(Array(length).fill(''));
  };

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];

    // Allow only one character per input
    if (input.length > 1) {
      input = input.charAt(0);
    }

    newPin[index] = input;
    setOTP(newPin);

    // Move to the next field if a character is entered
    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    // Call onComplete when all fields are filled
    if (newPin.every((digit) => digit !== '')) {
      onComplete(newPin.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (OTP[index]) {
        // Clear the current field
        const newPin = [...OTP];
        newPin[index] = '';
        setOTP(newPin);
      } else if (index > 0) {
        // Move to the previous field and clear it
        inputRef.current[index - 1]?.focus();
        const newPin = [...OTP];
        newPin[index - 1] = '';
        setOTP(newPin);
      }
    }
  };

  return (
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
          Enter the OTP code sent to your email
          <LoadingButton loading={tokenResent} onClick={resendToken} color='primary' variant="subtitle2" sx={{  mb: .5, color: 'red' }}>
            Resend
          </LoadingButton>
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
          {Array.from({ length }, (_, index) => (
            <TextField
              key={index}
              type="text"
              inputProps={{ maxLength: 1 }} // Ensure only one character is allowed
              value={OTP[index]}
              onChange={(e) => handleTextChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputRef={(ref) => {
                inputRef.current[index] = ref;
              }}
              style={{
                marginRight: index === length - 1 ? '0' : '10px',
                textAlign: 'center',
                borderRadius: 'none',
              }}
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
          Verify token
        </LoadingButton>
      </Card>
    </Stack>
  );
};

EmailToken.propTypes = {
  length: PropTypes.number,
  tokenResent: PropTypes.bool,
  onComplete: PropTypes.func,
  resendToken: PropTypes.func,
};

export default EmailToken;
