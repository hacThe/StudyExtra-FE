import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";
import { Container } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";
import './ExamResult.scss'

const ExamResult = () => {
    const Result  = useSelector(state => state.resultExam.resultExam) || {};
    console.log("result exam: ", useSelector(state => state));
//------------------------------------------------------------return-----------------------------------------//
    return (
        <Container className="exam-result" maxWidth="xl">
           <h1 style={{marginTop: "10rem"}}>Kết quả thi:  {Result.score} câu đúng !!!!!!!!</h1> 
        </Container>
    )
}
export default ExamResult;
