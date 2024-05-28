import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import closeFill from '@iconify/icons-eva/close-fill';
// import options2Fill from '@iconify/icons-eva/options-2-fill';

// material
import {
  Box,
  List,
  Paper,
  Stack,
  Button,
  Divider,
  Backdrop,
  ListItem,
  useTheme,
  TextField,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';

import Scrollbar from 'src/components/scrollbar';
//

// ----------------------------------------------------------------------



AddNotes.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default function AddNotes({ open, setOpen }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      />

      <Box
        sx={{
          top: 100,
          bottom: 12,
          right: 0,
          position: 'fixed',
          zIndex: 2001,
          ...(open && { right: 12 }),
        }}
      >
        <Paper
          sx={{
            height: 1,
            width: '0px',
            overflow: 'hidden',
            boxShadow: (theme) => theme.customShadows.z24,
            transition: (theme) => theme.transitions.create('width'),
            ...(open && { width: isMobile ? '90vw' : '70vw' }),
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Typography variant="subtitle1">Add Notes</Typography>
            <IconButton onClick={handleClose}>
              <Icon icon={closeFill} width={20} height={20} />
            </IconButton>
          </Stack>
          <Divider />

          <Scrollbar sx={{ height: 1 }}>
            <Stack spacing={4} sx={{ pt: 3, px: 3, pb: 15 }}>
              <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" height="65vh">
                  <Box flexGrow={1} component={Paper} elevation={3} p={2} overflow="auto" mb={2}>
                    <List>
                      {messages.map((message, index) => (
                        <ListItem key={index} disableGutters>
                          <Box
                            sx={{
                              p: 2,
                              bgcolor: 'primary.lighter',
                              borderRadius: '10px',
                              maxWidth: '75%',
                              ml: 'auto',
                              mr: 0,
                              boxShadow: 1,
                            }}
                          >
                            <Typography variant="body1" color="common.white">
                              {message}
                            </Typography>
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box display="flex" mt="auto">
                    <TextField
                      label="Type a message"
                      variant="outlined"
                      fullWidth
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSendMessage}
                      sx={{ ml: 1 }}
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Stack>
          </Scrollbar>
        </Paper>
      </Box>
    </>
  );
}
