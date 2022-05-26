import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from 'react-router-dom';
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


    useEffect(() => {
        dispatch(examAction.getOne(param.id));
    }, [])

    const LeaderCard = () => {
        return (
            <div className="list-card">
                <Card className="leader-card">
                    <div className="rank">1.</div>
                    <div className="avata_group">
                        <Avatar alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
                        <p>Leslie Alexander</p>
                    </div>
                    <div className="score">10</div>
                </Card>
            </div>
        )
    }
    const takeExam = useSelector(state => state.takeExam);

    if (!takeExam.isLoading && takeExam.isTaking === 'taking') {
        navigate('/luyen-de/' + exam._id + '/vao-thi');
    }
    else
        if (!takeExam.isLoading && takeExam.isTaking === 'notAccept') {
            takeExam.isTaking = 'innit';
            alert(takeExam.error);
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
                        {exam !== {} ? <></> : exam.requirement.map((item, index) => (
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

                        {Array.from({ length: 10 }).map((_, idx) => (
                            <LeaderCard key={idx} />
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ExamDescription;
