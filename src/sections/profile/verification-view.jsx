import React from 'react'
import { Icon } from '@iconify/react';
import failed from '@iconify/icons-eva/close-outline';
import fileFill from '@iconify/icons-eva/loader-outline';
import success from '@iconify/icons-eva/checkmark-circle-outline';

import { Paper, Typography, CircularProgress } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator } from '@mui/lab';

import { Block } from './Block';

const TIMELINES = [
    {
      key: 1,
      title: 'Basic Info',
      des: 'Verification in progress',
      time: '09:30 am',
      icon:  <CircularProgress color="warning" size={15} />
    },
    {
      key: 2,
      title: 'Contact Info',
      des: 'Verification failed',
      time: '10:00 am',
      color: 'primary',
      icon: <Icon icon={failed} />
    },
    {
      key: 3,
      title: 'Employment Info',
      des: 'Verification in progress',
      time: '10:00 am',
    //   color: 'warning',
      icon: <CircularProgress color="warning" size={15} />
    },
    {
      key: 4,
      title: 'Education Info',
      des: 'Verification in progress',
      time: '10:30 am',
    //   color: 'warning',
      icon: <CircularProgress color="warning" size={15} />
    },
    {
      key: 5,
      title: 'Financial Info',
      des: 'Verified',
      time: '11:00 am',
      color: 'success',
      icon: <Icon icon={success} />
    },
    {
      key: 6,
      title: 'Identification Info',
      des: 'Verification in progress',
      time: '11:30 am',
      color: 'warning',
      icon: <Icon icon={fileFill} />
    },
    {
      key: 7,
      title: 'Real Estate Info',
      des: 'Verification in progress',
      time: '12:00 am',
      color: 'warning',
      icon: <Icon icon={fileFill} />
    },
    {
      key: 7,
      title: 'Residential Histories',
      des: 'Verification in progress',
      time: '12:00 am',
      color: 'warning',
      icon: <Icon icon={fileFill} />
    }
  ];
const VerificationView = () => {
    console.log('verification');
  return (
    <Block title='Data Verification'>  <Timeline position="alternate">
    {TIMELINES.map((item) => (
      <TimelineItem key={item.key}>
        {/* <TimelineOppositeContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.title}
          </Typography>
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineDot color={item.color}>{item.icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            sx={{
              p: 3,
              bgcolor: '#919eab1f'
            }}
          >
            <Typography variant="subtitle2">{item.title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.des}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline></Block>
  )
}

export default VerificationView
