import React from 'react';
import '../Search.scss'
import { GrDocumentText } from 'react-icons/gr'
import { FiUserCheck } from 'react-icons/fi'

function DocumentCard(props) {
    return (
        <div className='custom-exam'>
            <div style={{ display: 'flex', marginLeft: '15px' }}>
                <GrDocumentText style={{ fontSize: '25px', marginRight: '25px', color:'#7B68EE' }}></GrDocumentText>
                <div>
                    <div style={{fontFamily: 'Montserrat', fontWeight:'400', fontSize:'16px'}}>5 ĐỀ THI THỬ MỚI NHẤT THẦY THÀNH PHI PHƯỚC</div>
                    <div style={{color: '#838383', fontSize:'10px', marginTop:'4px'}}>Khóa học chung - Thời gian: 30p</div>
                </div>
            </div>
            <div style={{ display: 'flex', color: '#838383' }}>
                <FiUserCheck style={{ marginRight: '12px' }}></FiUserCheck>
                <div style={{ fontSize: '14px', marginRight: '20px' }}>65</div>
            </div>
        </div>
    );
}

export default DocumentCard;