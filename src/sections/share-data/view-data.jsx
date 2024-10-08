import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// material

import { useNavigate } from 'react-router-dom';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';

import LoadingButton from '@mui/lab/LoadingButton';
import {
  Stack,
  Drawer,
  Button,
  Avatar,
  styled,
  Divider,
  Typography,
  OutlinedInput,
} from '@mui/material';

import Scrollbar from 'src/components/scrollbar';
// import MHidden from 'src/components/common/MHidden';
import MIconButton from 'src/components/common/MIconButton';

//

// ----------------------------------------------------------------------

DataDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  data: PropTypes.object,
  description: PropTypes.string
};

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------
function mapShareableTypes(arrayOfObjects) {
  return arrayOfObjects?.map((obj) => {
    if (obj.shareable_type === 'ContactInformation') {
      return 'Contact';
    } if (obj.shareable_type === 'EducationDatum') {
      return 'Education';
    }if(obj.shareable_type === 'EmploymentInformation'){
      return 'Employment'
    }
    return obj.shareable_type; 
  });
}
export default function DataDetails({ card, isOpen, onClose, data, description }) {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const types = mapShareableTypes(data?.shareable_informations)
  const navigate = useNavigate();
  const { assignee } = card;

  const handleToggleCompleted = () => {
    setTaskCompleted((prev) => !prev);
  };

  const handleViewData = () => {
    const url = `/dashboard/download-view?id=${data.id}`;
    navigate(url);
  }

  return (
    <Drawer
      open={isOpen}
      // onClose={()=> onClose('data-details')}
      anchor="right"
      PaperProps={{ sx: { width: { xs: 1, sm: 480 } } }}
    >
      <Stack p={2.5} direction="row" alignItems="space-between">
        
          <MIconButton onClick={() => onClose('data-details')} sx={{ mr: 1 }}>
            <Icon icon={arrowIosBackFill} width={30} height={30} />
          </MIconButton>
       

        <Button
          size="small"
          variant="outlined"
          color={taskCompleted ? 'primary' : 'inherit'}
          startIcon={!taskCompleted && <Icon icon={checkmarkFill} width={16} height={16} />}
          onClick={handleToggleCompleted}
        >
          {taskCompleted ? 'unread' : 'viewed'}
        </Button>
      </Stack>

      <Divider />

      <Scrollbar>
        <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
          <OutlinedInput
            fullWidth
            multiline
            size="small"
            placeholder="Task name"
            value={data?.title}
            sx={{
              typography: 'h6',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
            }}
          />
          <Stack direction="row">
            <LabelStyle sx={{ mt: 1.5 }}>Assignee</LabelStyle>
            <Stack direction="row" flexWrap="wrap" alignItems="center">
              {assignee.map((user) => (
                <Avatar
                  key={user.id}
                  alt={user.name}
                  src={user.avatar}
                  sx={{ m: 0.5, width: 36, height: 36 }}
                />
              ))}
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center">
            <LabelStyle> Due date</LabelStyle>
            <LabelStyle> {data?.end_time.split(" ")[0]}</LabelStyle>
          </Stack>

          <Stack direction="row">
            <LabelStyle sx={{ mt: 2 }}>{description}</LabelStyle>
            <OutlinedInput
              fullWidth
              multiline
              rows={3}
              size="small"
              placeholder="Task name"
              value={types}
              sx={{ typography: 'body2' }}
            />
          </Stack>

          <Stack direction="row">
            <LabelStyle sx={{ mt: 2 }}>Attachments</LabelStyle>
            <Stack direction="row" flexWrap="wrap">
              <LabelStyle sx={{ mt: 2 }}>No Attachments</LabelStyle>
            </Stack>
          </Stack>
          {description &&  <LoadingButton
          onClick={handleViewData}
          size="large"
          type="button"
          variant="contained"
         
        >
          View Data
        </LoadingButton>}
        </Stack>
      </Scrollbar>

      <Divider />
    </Drawer>
  );
}
