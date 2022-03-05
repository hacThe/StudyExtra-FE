import React from 'react';
import './scss/Document.scss';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material';

import Pagination from './components/Pagination';
import DocumentCard from './components/DocumentCard';
const Document = () => {
  return (
    <div className="document-page-container">
        <Grid container spacing={2} className="document-container">
            <Grid md={2} style={{height: '100%'}}></Grid>
            <Grid item md={8} className="document-body">
                <div className='document-option-container'>
                    <Button className='button-option' style={{textTransform: 'none'}}>Tất cả</Button>
                    <Button className='button-option active' style={{textTransform: 'none'}}>Lớp 11</Button>
                    <Button className='button-option' style={{textTransform: 'none'}}>Lớp 10</Button>
                    <Button className='button-option' style={{textTransform: 'none'}}>Lớp 12</Button>
                    <Button className='button-option' style={{textTransform: 'none'}}>Luyện thi</Button>
                    <Button className='button-option' style={{textTransform: 'none'}}>Khác</Button>
                </div>
                <div className='document-sorting'>
                    <div className='sorting-label'>Sắp xếp theo</div>
                    <select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        className='sorting-control'
                    >
                        <option className="sorting-item">Mới nhất</option>
                        <option className="sorting-item">Cũ nhất</option>
                        <option className="sorting-item">Xem nhiều nhất</option>
                    </select>
                </div>
                <div className="document-list">
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                </div>
                <div className='ranking-footer'>
                    <Pagination page={3} />
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
export default Document
