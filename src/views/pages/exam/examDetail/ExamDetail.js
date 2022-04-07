import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Container, Grid, Button, FormControlLabel, RadioGroup, FormControl, FormLabel, Radio, ButtonGroup } from '@mui/material';
import './ExamDetail.scss'

const ExamDetail = () => {

    const Question = {
        index: 1,
        title: "Đây là câu hỏi nè á đù",
        answers: [
            {
                value: "A",
                content: "Câu trả lời là B"
            },
            {
                value: "B",
                content: "Câu trả lời là A"
            },
            {
                value: "C",
                content: "Câu trả lời là C"
            },
            {
                value: "D",
                content: "Tất cả đều đúng"
            }]
    }

    //------------------------------------count down timer--------------------------------------------//

    const calculateTimeLeft = (timeLeft) => {
        let time = timeLeft.hours * 60 * 60 + timeLeft.minutes * 60 + timeLeft.seconds - 1;
        let timer = {};

        if (time > 0) {
            timer = {
                hours: Math.floor((time / (60 * 60))),
                minutes: Math.floor((time / 60) % 60),
                seconds: Math.floor((time % 60))
            };
        }
        return timer;

    }
    const getTime = (examTime) => {
        let time = examTime;
        let timeLeft = {};

        if (time > 0) {
            timeLeft = {
                hours: Math.floor(time / 60),
                minutes: Math.floor(time % 60),
                seconds: Math.floor(time % 60 - Math.floor(time % 60))
            };
        }
        return timeLeft;

    }
    const examTime = 120;//////////////////////--------------time- exam
    const [timeLeft, setTimeLeft] = useState(getTime(examTime));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(timeLeft));
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval] / 10 < 1 ? "0" + timeLeft[interval] : timeLeft[interval]} {interval === "seconds" ? "" : ":"}
            </span>
        );
    });
    //------------------------------------------------------------------------------------------//

    return (
        <Container className="exam-detail" maxWidth="xl">
            <Grid container spacing={2} className="exam-grid">
                <Grid item xs={12} md={8} className="question-detail_box">
                    <div className="prev-next_btn">
                        <Button variant="contained">Câu trước</Button>
                        <Button variant="contained">Câu sau</Button>
                    </div>
                    <div className="question-detail">
                        <FormControl>
                            <FormLabel>Câu {Question.index}: {Question.title}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                className="radio-group"
                            >
                                {Question.answers.map((item, index) => (
                                    <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.content} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="btn-answer">
                        <Button variant="contained">Trả lời</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className="list-question">
                    <div className="exam-name-time_group">
                        <div className="name-exam">
                            <h5>Đây là tên bài thi kkk</h5>
                        </div>
                        <div className="timer-component">
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>
                    </div>
                    <div className="list-question_box">
                        <ButtonGroup className="button-group">
                            {Array.from({ length: 40 }).map((_, idx) => (
                                <Button key={idx} id={idx}>{idx + 1}</Button>
                            ))}
                        </ButtonGroup>
                    </div>
                </Grid>
            </Grid>
            <div className="btn-submit">
                <Button variant="contained">Nộp bài</Button>
            </div>
        </Container>
    )
}
export default ExamDetail;
