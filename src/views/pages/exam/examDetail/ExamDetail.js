import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Container, Grid, Button, Modal, RadioGroup, FormControl, FormLabel, Radio, ButtonGroup, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";
import './ExamDetail.scss'

const ExamDetail = () => {
    const questionsID = "625642de9544c72e1353eff9";
    const examID = "6256979a9544c72e1353f00f";
    const TranslateID = ['A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
    const innitQuestion = [{
        title: "",
        answer: []
    }];

    const dispatch = useDispatch()
    const Questions = useSelector(state => state.exam.questions) || innitQuestion;
    useEffect(() => {
        dispatch(examAction.getQuestions(questionsID));
    }, [])

    //------------------------------------count down timer--------------------------------------------//

    const timeExam = 120;
    const timeLeftRef = useRef(timeExam * 60);
    const timer = useRef();
    const result = useRef();
    useEffect(() => {
        timer.current = setInterval(() => {
            timeLeftRef.current--;
            // console.log(timeLeftRef.current);
            if (timeLeftRef.current == 0) {
                console.log(result.current);////////////////////////////////////////////////////////callllll api
                let userAnswer = result.current;
                dispatch(examAction.postResultExam(questionsID, examID, userAnswer));
                navigate('/luyen-de/id:1/ket-qua')
            }
        }, 1000)
        return () => clearInterval(timer.current);
    }, []);

    function TimerComponents() {
        const [timeLeft, setTimeLeft] = useState(timeLeftRef.current);
        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        });

        const getTime = (timeLeft) => {
            let time = timeLeft;
            let timer = {};

            if (time > 0) {
                timer = {
                    hours: Math.floor((time / (60 * 60))),
                    minutes: Math.floor((time / 60) % 60),
                    seconds: Math.floor(time % 60)
                };
            }
            return timer;
        }
        const [timer, setTimer] = useState(getTime(timeLeftRef.current));
        useEffect(() => {
            setTimer(getTime(timeLeft));
            // console.log(timer);
        }, [timeLeft])
        return (
            <div>
                <span>
                    {timer["hours"] / 10 < 1 ? "0" + timer["hours"] : timer["hours"]}{":"}
                </span>
                <span>
                    {timer["minutes"] / 10 < 1 ? "0" + timer["minutes"] : timer["minutes"]}{":"}
                </span>
                <span>
                    {timer["seconds"] / 10 < 1 ? "0" + timer["seconds"] : timer["seconds"]}
                </span>
            </div>
        )
    }
    //--------------------------------------------Modal-Submit----------------------------------------------//
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const navigate = useNavigate();
    function BasicModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const styleBtnCancle = {
            textTransform: "none", background: "#3DA43B", fontSize: "1.3rem", fontFamily: "Montserrat"
        }
        const styleBtnSubmit = {
            textTransform: "none", background: "#D83333", fontSize: "1.3rem", fontFamily: "Montserrat"
        }
        const handleSubmit = () => {
            console.log(result.current);////////////////////////////////////////////////////////callllll api
            let userAnswer = result.current;
            dispatch(examAction.postResultExam(questionsID, examID, userAnswer));
            navigate('/luyen-de/id:1/ket-qua')
        }
        return (
            <div>
                <Button variant="contained" onClick={() => handleOpen()}>Nộp bài</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center", fontSize: "1.5rem", fontFamily: "Montserrat" }}>
                            Nộp bài và kết thúc?
                        </Typography>
                        <Typography id="modal-modal-description" style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
                            <Button variant="contained" style={styleBtnCancle} onClick={() => handleClose()}>Hủy</Button>
                            <Button variant="contained" style={styleBtnSubmit} onClick={() => handleSubmit()}>Nộp Bài</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        );
    }
    //---------------------------------------------exam--grid-------------------------------------------//

    function ExamGrid() {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        var arr = Array(Questions.length).fill(0);
        const [userAnswer, setUserAnswer] = useState(arr);
        const [checked, setchecked] = useState();
        useEffect(() => {
            setchecked(userAnswer[currentQuestion]);
        }, [currentQuestion])
        const handlePrebtn = () => {
            setCurrentQuestion(currentQuestion - 1);
        }
        const handleNextbtn = () => {
            setCurrentQuestion(currentQuestion + 1);
        }
        const handleChecked = (id) => {
            setchecked(id);
            setUserAnswer(existingItems => {
                return [
                    ...existingItems.slice(0, currentQuestion),
                    id,
                    ...existingItems.slice(currentQuestion + 1),
                ]
            })
        }
        result.current = userAnswer;

        const handleStyle = (idx) => {
            if (currentQuestion == idx && userAnswer[idx] != 0) return ({ textDecoration: "underline", backgroundColor: "rgb(109 85 255)", color: "#ffffff", borderColor: "#ffffff" });
            if (currentQuestion == idx) return ({ textDecoration: "underline", borderColor: "#7e7e7e" });
            if (userAnswer[idx] != 0) return ({ backgroundColor: "#7B68EE", color: "#ffffff", borderColor: "#7B68EE" });
            return ({});
        }
        return (
            <Grid container spacing={2} className="exam-grid">
                <Grid item xs={12} lg={7} xl={8} className="question-detail_box">
                    <div className="prev-next_btn">
                        <Button variant="contained" onClick={handlePrebtn} disabled={currentQuestion === 0}>Câu trước</Button>
                        <Button variant="contained" onClick={handleNextbtn} disabled={currentQuestion === Questions.length - 1}>Câu sau</Button>
                    </div>
                    <div className="question-detail">
                        <FormControl>
                            <FormLabel>Câu {currentQuestion + 1}: {Questions[currentQuestion].title}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                className="radio-group"
                            >
                                {Questions[currentQuestion].answer.map((item, index) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            className="input-radio"
                                            checked={item.id == checked}
                                            onChange={() => handleChecked(item.id)}
                                        >
                                        </input>
                                        <label className="check-content">{TranslateID[item.id - 1]}. {item.content}</label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} lg={5} xl={4} className="question-group">
                    <Box className="list-question-wrapper" sx={{ display: { xs: "flex", lg: "block" } }}>
                        <Box className="list-question_box" sx={{ position: { xs: "relative", lg: "absolute" } }}>
                            <ButtonGroup className="button-group">
                                {Questions.map((item, idx) => (
                                    <Button key={idx}
                                        id={idx}
                                        //style={currentQuestion == idx ? { textDecoration: "underline" } :  {backgroundColor: "#7B68EE", color: "#ffffff", borderColor: "#7B68EE"}}
                                        style={handleStyle(idx)}
                                        onClick={() => setCurrentQuestion(idx)}
                                    >{idx + 1}</Button>
                                ))}
                            </ButtonGroup>
                        </Box>
                    </Box>

                    <div className="btn-submit">

                        <BasicModal></BasicModal>
                    </div>

                </Grid>
            </Grid>
        )
    }
    //------------------------------------------------------------return-----------------------------------------//
    return (
        <Container className="exam-detail" maxWidth="xl">
            <div className="exam-name-time_group">
                <div className="name-exam">
                    <h5>Đây là tên bài thi kkk</h5>
                </div>
                <div className="timer-component">
                    {/* {TimerComponents.length ? TimerComponents : <span>Time's up!</span>} */}
                    <TimerComponents></TimerComponents>
                </div>
            </div>
            <ExamGrid></ExamGrid>
        </Container>
    )
}
export default ExamDetail;
