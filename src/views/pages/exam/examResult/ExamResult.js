import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import { Container } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";
import './ExamResult.scss'

const ExamResult = () => {
    const takeExam = useSelector(state => state.takeExam) || {};
    const dispatch = useDispatch();
    const param = useParams();
    const examID = param.id;
    useEffect (() => {
        dispatch(examAction.getResultExam(examID));
    }, [])

    //------------------------------------------------------------return-----------------------------------------//
    return (
        <Container className="exam-result" maxWidth="xl">
            <h1 style={{ marginTop: "10rem" }}>Kết quả thi: {!takeExam.isLoading ?  takeExam.resultExam.score : "xxx"} câu đúng !!!!!!!!</h1>
        </Container>
    )
}
export default ExamResult;
