import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../Courses.scss'
export default function PaginationOutlined(props) {

  const renderNumberOfPage = () => {
    if (props.index % 8 == 0) {
      return props.index / 8
    } else {
      return Math.floor(props.index / 8) + 1;
    }
  }

  const choosePage = (e, num) => {
    if (props.setCurrentPageInYourCourses) {
      props.setCurrentPageInYourCourses(num);
    } else {
      props.setCurrentPage(num);
    }
  }


  return (
    <Stack style={{ marginTop: '30px', marginBottom: '10px' }} spacing={2}>
      <Pagination onChange={(event, page) => choosePage(event, page)} size='large' count={renderNumberOfPage()} variant="outlined" color="secondary" />
    </Stack>
  );
}