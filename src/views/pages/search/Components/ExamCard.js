import React from 'react';
import '../Search.scss'
import { GrDocumentPdf } from 'react-icons/gr'
import { AiOutlineFolderView } from 'react-icons/ai'

function ExamCard(props) {
    return (
            <div className='custom-exam'>
                <div style={{ display: 'flex', marginLeft: '15px' }}>
                    <GrDocumentPdf style={{ fontSize: '25px', marginRight: '25px' }}></GrDocumentPdf>
                    <div style={{ lineHeight: '30px' }}>5 ĐỀ THI THỬ MỚI NHẤT THẦY VŨ NGỌC ANH</div>
                </div>
                <div style={{ display: 'flex', color: '#838383' }}>
                    <AiOutlineFolderView style={{ marginRight: '12px' }}></AiOutlineFolderView>
                    <div style={{ fontSize: '14px', marginRight: '20px' }}>65</div>
                </div>
            </div>
    );
}

export default ExamCard;