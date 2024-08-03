import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import failed from '@iconify/icons-eva/close-outline';
import fileFill from '@iconify/icons-eva/loader-outline';
import success from '@iconify/icons-eva/checkmark-circle-outline';

import {
  Paper,
  Button,
  Checkbox,
  FormGroup,
  Typography,
  CircularProgress,
  FormControlLabel,
} from '@mui/material';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineOppositeContent,
} from '@mui/lab';

import { Block } from '../components/Block';

const TIMELINES = [
  {
    key: 1,
    title: 'Basic Info',
    des: 'Verification in progress',
    time: '3 months ago',
    color: 'warning',
    icon: <CircularProgress color="warning" size={15} />,
  },
  {
    key: 2,
    title: 'Contact Info',
    des: 'Verification failed',
    time: '10:00 am',
    color: 'primary',
    icon: <Icon icon={failed} />,
  },
  {
    key: 3,
    title: 'Employment Info',
    des: 'Verification in progress',
    time: '10:00 am',
    color: 'warning',
    icon: <CircularProgress color="secondary" size={15} />,
  },
  {
    key: 4,
    title: 'Education Info',
    des: 'Verification in progress',
    time: '10:30 am',
    //   color: 'warning',
    icon: <CircularProgress color="warning" size={15} />,
  },
  {
    key: 5,
    title: 'Financial Info',
    des: 'Verified',
    time: '11:00 am',
    color: 'success',
    icon: <Icon icon={success} />,
  },
  {
    key: 6,
    title: 'Identification Info',
    des: 'Verification in progress',
    time: '11:30 am',
    color: 'warning',
    icon: <Icon icon={fileFill} />,
  },
  {
    key: 7,
    title: 'Real Estate Info',
    des: 'Verification in progress',
    time: '12:00 am',
    color: 'warning',
    icon: <Icon icon={fileFill} />,
  },
  {
    key: 7,
    title: 'Residential Histories',
    des: 'Verification in progress',
    time: '12:00 am',
    color: 'warning',
    icon: <Icon icon={fileFill} />,
  },
];
const VerificationView = () => {
  console.log('verification');
  const [selected, setselected] = useState([]);
  const [showVerficationView, setshowVerficationView] = useState(false);
  const handleSelect = (ev, field) => {
    console.log(ev, field);
    const val = ev.target.checked;
    if (val) {
      const s = selected.filter((e) => e.key === field.key);
      if (s.length === 0) {
        setselected([...selected, field]);
      }
    } else {
      console.log(selected);
      const s = selected.filter((e) => e.key !== field.key);
      console.log(s);
      setselected(s);
    }
  };
  return (
    <>
      {showVerficationView ? (
        <Block title="Data Verification">
          <Timeline position="alternate">
            {selected.length > 0 &&
              selected.map((item) => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      sx={{
                        p: 3,
                        bgcolor: '#919eab1f',
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
          </Timeline>

          <Button
            sx={{ my: 2 }}
            variant="outlined"
            disabled={selected.length === 0}
            onClick={() => setshowVerficationView(false)}
          >
            Back
          </Button>
        </Block>
      ) : (
        <>
          <Typography textAlign="center" variant="h6">
            Select the data you want to verify
          </Typography>
          {TIMELINES.map((f) => (
            <FormGroup>
              <FormControlLabel
                name={f.title}
                onChange={(ev) => handleSelect(ev, f)}
                control={<Checkbox />}
                label={f.title}
              />
            </FormGroup>
          ))}
          <Button
            sx={{ my: 2 }}
            variant="outlined"
            disabled={selected.length === 0}
            onClick={() => setshowVerficationView(true)}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
};

export default VerificationView;
