import React from 'react';
import DocumentCard from './DocumentCard';
import PaginationOutlined from './PaginationOutlined';
import '../Search.scss'

function Document(props) {
    return (
        <div  style={{ marginTop: '10px' }}>
            <DocumentCard></DocumentCard>
            <DocumentCard></DocumentCard>
            <DocumentCard></DocumentCard>
            <DocumentCard></DocumentCard>
            <div style={{display:'flex', justifyContent:'center'}}>
                <PaginationOutlined></PaginationOutlined>
            </div>
        </div>
    );
}

export default Document;