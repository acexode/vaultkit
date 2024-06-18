import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import closeFill from '@iconify/icons-eva/close-fill';
// import options2Fill from '@iconify/icons-eva/options-2-fill';

// material
import {
  Box,
  Paper,
  Stack,
  Divider,
  Backdrop,
  useTheme,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';

import { chatConversation } from 'src/_mock/chatdata';

import Scrollbar from 'src/components/scrollbar';

import ChatMessageInput from './ChatInput';
import ChatMessageItem from './ChatMessageItem';

//

AddNotes.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default function AddNotes({ open, setOpen }) {
  const [conversation, setconversation] = useState(chatConversation);
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down('sm'));
  const scrollRef = useRef();

  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    scrollMessagesToBottom();
  }, [conversation.messages]);

  // const images = conversation.messages
  //   .filter((msg) => messages.contentType === 'image')
  //   .map((msg) => messages.body);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleConversartion = (value) => {
    const { conversationId, message } = value;

    const newMessage = {
      conversationId,
      messageId: Math.floor(Math.random() * 1000000),
      body: message,
      contentType: 'text',
      attachments: [],
      createdAt: new Date(),
      senderId: '8864c717-587d-472a-929a-8e5f298024da-0',
    };
    console.log(newMessage);
    setconversation({
      ...conversation,
      messages: [...conversation.messages, newMessage],
    });

    // state.conversations.byId[conversationId].messages.push(newMessage);
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
                  <Box flexGrow={1}  overflow="auto" mb={2}>
                    {conversation.messages.map((message) => (
                      <ChatMessageItem
                        key={message.id}
                        message={message}
                        conversation={conversation}
                        handleConversartion={handleConversartion}
                      />
                    ))}
                    </Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ py: 2, pr: 1, pl: 2.5 }}
                    >
                      <ChatMessageInput onSend={handleConversartion} conversationId={conversation.id} />
                    </Stack>
                  </Box>
                
              </Container>
            </Stack>
          </Scrollbar>
        </Paper>
      </Box>
    </>
  );
}
