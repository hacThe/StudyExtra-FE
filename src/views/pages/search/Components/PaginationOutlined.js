import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined(props) {

  return (
    <Stack style={{ marginTop: '30px', marginBottom: '10px' }} spacing={2}>
      <Pagination size='large' count={10} variant="outlined" color="secondary" />
    </Stack>
  );
}