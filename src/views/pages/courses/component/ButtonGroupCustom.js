import * as React from 'react';
import { Button } from '@mui/material';
import '../Courses.scss'
export default function ButtonGroupCustom(props) {


  const HandleClick = (e) => {
    props.onChangeCourses(e.target.name)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={(e) => HandleClick(e)} name='all' className={props.typeCourse == 'all' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Tất cả
      </Button>
      <Button onClick={(e) => HandleClick(e)} name='class10' className={props.typeCourse == 'class10' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Lớp 10
      </Button>
      <Button onClick={(e) => HandleClick(e)} name='class11' className={props.typeCourse == 'class11' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Lớp 11
      </Button>
      <Button onClick={(e) => HandleClick(e)} name='class12' className={props.typeCourse == 'class12' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Lớp 12
      </Button>
      <Button onClick={(e) => HandleClick(e)} name='training' className={props.typeCourse == 'training' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Luyện thi
      </Button>
      <Button onClick={(e) => HandleClick(e)} name='orther' className={props.typeCourse == 'orther' ? 'type-button active' : 'type-button'} style={{ margin: '10px 20px', fontSize: '12px', fontWeight: '700', color: 'black', borderRadius: '20px', border: '2px solid black' }} variant="outlined" size="medium">
        Khác
      </Button>
    </div>
  );
}
