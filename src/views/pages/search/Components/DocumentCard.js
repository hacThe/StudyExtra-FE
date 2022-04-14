import React from 'react';
import '../Search.scss'
import { GrDocumentText } from 'react-icons/gr'
import { FiUserCheck } from 'react-icons/fi'

function DocumentCard(props) {
    return (
        <a className='custom-a' href={props.document.link} target='_blank'>
            <div className='custom-exam'>
                <div style={{ display: 'flex', marginLeft: '15px' }}>
                    <GrDocumentText style={{ fontSize: '25px', marginRight: '25px', color: '#7B68EE' }}></GrDocumentText>
                    <div>
                        <div style={{ fontFamily: 'Montserrat', fontWeight: '400', fontSize: '16px' }}>{props.document.name}</div>
                        <div style={{ color: '#838383', fontSize: '10px', marginTop: '4px' }}>Khóa học chung - Thời gian: 30p</div>
                    </div>
                </div>
                <div style={{ display: 'flex', color: '#838383' }}>
                    <FiUserCheck style={{ marginRight: '12px' }}></FiUserCheck>
                    <div style={{ fontSize: '14px', marginRight: '20px' }}>{props.document.view}</div>
                </div>
            </div>
        </a>
    );
}

export default DocumentCard;