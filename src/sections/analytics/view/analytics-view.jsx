import React from 'react'

import { Stack, Button, Container, Typography} from '@mui/material'

import Iconify from 'src/components/iconify'

const AnalyticsView = () => (
  <Container>
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4">Analytics</Typography>

    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
      New Post
    </Button>
  </Stack>

  <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
    lorem ipsum
  </Stack>


</Container>
  )

export default AnalyticsView
