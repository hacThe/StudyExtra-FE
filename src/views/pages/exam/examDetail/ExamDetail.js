import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Modal } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";
import { TimerComponent } from "../component/TimerComponent";
import { ExamGrid } from "./ExamGrid";
import './ExamDetail.scss';

const ExamDetail = () => {
    const navigate = useNavigate();

    const takeExam = useSelector(state => state.takeExam);

    const param = useParams();
    const innitQuestion = [{
        nameQuestion: "",
        listAnswers: []
    }];

    const dispatch = useDispatch()
    const exam = useSelector(state => state.exam.exam) || {};
    const Questions = exam.listQuestion || innitQuestion;
    const result = useRef();
    const timeLeft = useRef();

    if (localStorage.getItem("timeLeft") === null) {
        localStorage.setItem("timeLeft", exam.time * 60);
        timeLeft.current = exam.time * 60;
    }
    else {
        timeLeft.current = localStorage.getItem("timeLeft");
    }

    if (localStorage.getItem("userAnswers") === null) {
        var arr = Array(Questions.length).fill(0);
        localStorage.clear();
        localStorage.setItem("userAnswers", JSON.stringify(arr));
    }
    else {
        result.current = JSON.parse(localStorage.getItem("userAnswers"))
        console.log("result current: ", result.current);
    }


    useEffect(() => {
        dispatch(examAction.getOne(param.id));
    }, [])
    useEffect(() => {
        if (takeExam.submited) {
            alert("Result saved");
            navigate('/luyen-de/' + param.id + '/ket-qua')
            localStorage.clear();
        }
        else
            if (takeExam.isTaking !== "taking" && !takeExam.submited && !takeExam.isLoading) navigate(-1)
    }, [takeExam])

    const handleSubmit = () => {
        console.log("answer: ", result.current);
        localStorage.removeItem("userAnswers");
        localStorage.removeItem("timeLeft");

        dispatch(examAction.postResultExam(exam._id, result.current));
    }

    //------------------------------------------------------------return-----------------------------------------//
    return (
        <Container className="exam-detail" maxWidth="xl">
            <div className="exam-name-time_group">
                <div className="name-exam">
                    <h5>{exam.name}</h5>
                </div>
                <div className="timer-component">
                    <TimerComponent timeLeft={timeLeft.current} handleSubmit={handleSubmit} />
                </div>
            </div>
            <ExamGrid handleSubmit={handleSubmit} Questions={Questions} result={result} />
        </Container>
    )
}
export default ExamDetail;
