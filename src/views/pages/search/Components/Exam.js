import React from 'react';
import '../Search.scss'
import ExamCard from './ExamCard';
import PaginationOutlined from './PaginationOutlined';

function Exam(props) {
    return (
        <div style={{ marginTop: '10px' }}>
            <ExamCard></ExamCard>
            <ExamCard></ExamCard>
            <ExamCard></ExamCard>
            <ExamCard></ExamCard>
            <div style={{display:'flex', justifyContent:'center'}}>
                <PaginationOutlined></PaginationOutlined>
            </div>
        </div>
    );
}

export default Exam;