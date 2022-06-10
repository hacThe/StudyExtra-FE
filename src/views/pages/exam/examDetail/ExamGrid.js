import React, { useEffect, useState, useRef } from "react";
import { Grid, Button, RadioGroup, FormControl, FormLabel, ButtonGroup, Box } from '@mui/material';
import { SubmitModal } from "./SubmitModal";
import './ExamGrid.scss'
import { result } from "lodash";


const TranslateID = ['A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];

function ExamGrid(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //  var arr = Array(props.Questions.length).fill(0);
    const [userAnswer, setUserAnswer] = useState(props.result.current);
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
    localStorage.setItem("userAnswers", JSON.stringify(userAnswer));
    props.result.current = userAnswer;/////////////////////

    const handleStyle = (idx) => {

        if (currentQuestion === idx && userAnswer[idx] > 0) return ({ textDecoration: "underline", backgroundColor: "rgb(109 85 255)", color: "#ffffff", borderColor: "#ffffff" });
        if (currentQuestion === idx) return ({ textDecoration: "underline", borderColor: "#7e7e7e" });
        if (userAnswer[idx] > 0) return ({ backgroundColor: "#7B68EE", color: "#ffffff", borderColor: "#7B68EE" });
        return ({});
    }
    return (
        <Grid container spacing={2} className="exam-grid">
            <Grid item xs={12} lg={7} xl={8} className="question-detail_box">
                <div className="prev-next_btn">
                    <Button variant="contained" onClick={handlePrebtn} disabled={currentQuestion === 0}>Câu trước</Button>
                    <Button variant="contained" onClick={handleNextbtn} disabled={currentQuestion === props.Questions.length - 1}>Câu sau</Button>
                </div>
                <div className="question-detail">
                    <FormControl>
                        <FormLabel>Câu {currentQuestion + 1}: {props.Questions[currentQuestion].nameQuestion}</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            className="radio-group"
                        >
                            {props.Questions[currentQuestion].listAnswers.map((item, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        className="input-radio"
                                        checked={index + 1 == checked}
                                        onChange={() => handleChecked(index + 1)}
                                    >
                                    </input>
                                    <label className="check-content">{TranslateID[index]}. {item}</label>
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
                            {props.Questions.map((item, idx) => (
                                <Button key={idx}
                                    id={idx}
                                    style={handleStyle(idx)}
                                    onClick={() => setCurrentQuestion(idx)}
                                >{idx + 1}</Button>
                            ))}
                        </ButtonGroup>
                    </Box>
                </Box>

                <div className="btn-submit">
                    <SubmitModal handleSubmit={props.handleSubmit} />
                </div>

            </Grid>
        </Grid>
    )
}

export { ExamGrid }