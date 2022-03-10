import * as React from 'react';
import { Button } from '@mui/material';
import '../Courses.scss'
export default function ButtonGroupCustom() {

  const [active, setActive] = React.useState('all');

  const HandleClick = (e) => {
    console.log(e.target.name);
    setActive(e.target.name)
  }

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <Button onClick={(e) => HandleClick(e)} name='all' className={active == 'all'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Tất cả
        </Button>
        <Button onClick={(e) => HandleClick(e)} name='class10' className={active == 'class10'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Lớp 10
        </Button>
        <Button onClick={(e) => HandleClick(e)} name='class11' className={active == 'class11'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Lớp 11
        </Button>
        <Button onClick={(e) => HandleClick(e)} name='class12' className={active == 'class12'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Lớp 12 
        </Button>
        <Button onClick={(e) => HandleClick(e)} name='training' className={active == 'training'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Luyện thi
        </Button>
        <Button onClick={(e) => HandleClick(e)} name='orther' className={active == 'orther'? 'type-button active': 'type-button'} style={{margin:'10px 20px', fontSize:'12px', fontWeight:'700', color: 'black', borderRadius: '20px', border:'2px solid black'}} variant="outlined" size="medium">
          Khác
        </Button>
    </div>
  );
}
