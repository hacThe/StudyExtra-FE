import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationOutlined(props) {

  const renderNumberOfPage = () => {
    if (props.index % props.itemPerPage == 0) {
      return props.index / props.itemPerPage
    } else {
      return Math.floor(props.index / props.itemPerPage) + 1;
    }
  } 

  const choosePage = (e, num) => {
   /*  if (props.setCurrentPageInYourCourses) {
      props.setCurrentPageInYourCourses(num);
    } else { */
      props.setCurrentPage(num);
    //}
  }


  return (
    <Stack style={{ marginTop: '30px', marginBottom: '10px' }} spacing={2}>
      <Pagination onChange={(event, page) => choosePage(event, page)} size='large' count={renderNumberOfPage()} variant="outlined" color="secondary" />
    </Stack>
  );
}