import React , {useState} from 'react';
import './scss/Overall.scss'

import TableManageMent from './components/TableManagement';

const Overall = () => {
    return (
        <div className='overall-wapper'>
            <div className='title'>
                Overall
            </div>
            <div className="table-container">
                <TableManageMent/>
            </div>          
        </div>
    )
}

export default Overall