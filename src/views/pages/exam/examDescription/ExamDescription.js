import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";
import { Container, Grid, Button, Card, Avatar } from '@mui/material';
import './ExamDescription.scss'
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";

const ExamDescription = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const exam = useSelector(state => state.exam.exam) || {}
    const takeExam = useSelector(state => state.takeExam);
    const topResult = useSelector(state => state.exam.topResult) || []

    useEffect(() => {
        dispatch(examAction.getOne(param.id));
        dispatch(examAction.getTopResult(param.id));
    }, [])


    useEffect(() => {
        if (!takeExam.isLoading && takeExam.isTaking === 'taking') {
            navigate('/luyen-de/' + exam._id + '/vao-thi');
            localStorage.clear();
        }
        else
            if (!takeExam.isLoading && takeExam.isTaking === 'notAccept') {
                takeExam.isTaking = 'innit';
                alert(takeExam.error);
            }
    }, [takeExam])


    const LeaderCard = (props) => {
        return (
            <div className="list-card">
                <Card className="leader-card">
                    <div className="rank">{props.index + 1}.
                        <div className="avata_group">
                            <Avatar alt="Remy Sharp" src={props.data.userID.avatar} />
                            <p>{props.data.userID.name}</p>
                        </div>
                    </div>

                    <div className="score">Score: {props.data.maxScore}</div>
                </Card>
            </div>
        )
    }


    const takeExamHandleClick = () => {
        dispatch(examAction.CheckExamRequirement(exam._id));
    }


    return (
        <Container className="exam-detail" maxWidth="xl">
            <Grid container spacing={2} className="exam-grid">
                <Grid item xs={12} md={7} lg={8} className="exam-detail_content">
                    <div className="exam-name">
                        <h5>{exam.name}</h5>
                        <p>{exam.description}</p>
                    </div>
                    <div className="exam-content">
                        <h5>Nội dung</h5>
                        <p>{exam.detail}</p>
                    </div>
                    <div className="exam-require">
                        <h5>Yêu cầu trình độ</h5>
                        {typeof exam.requirement === 'undefined' ? <></> : exam.requirement.map((item, index) => (
                            <div key={index} className="require-group">
                                <p><BsCheckCircleFill></BsCheckCircleFill> {item}</p>
                            </div>
                        ))}

                    </div>
                </Grid>
                <Grid item xs={12} md={5} lg={4} className="leader-board_column">
                    <Button variant="contained" className="btn-contained" onClick={() => takeExamHandleClick()}>Vào thi</Button>
                    <div className="leader-board_group">
                        <h5><GiQueenCrown></GiQueenCrown> Leaderboard</h5>

                        {topResult.length > 1 &&
                            (
                                topResult.map((val, idx) => (
                                    <LeaderCard key={idx} data={val} index={idx} />
                                ))
                            )
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ExamDescription;
