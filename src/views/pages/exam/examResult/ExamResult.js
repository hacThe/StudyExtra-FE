import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Avatar, Grid, Button } from "@mui/material";
import { GoCheck } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import { GiQueenCrown } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../../actions/exam.actions";
import "./ExamResult.scss";

const ExamResult = () => {
  const TranslateID = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
  ];
  const navigate = useNavigate();
  const takeExam = useSelector((state) => state.takeExam) || {};
  const dispatch = useDispatch();
  const param = useParams();
  const examID = param.id;

  const exam = useSelector((state) => state.exam.exam) || {};
  const topResult = useSelector((state) => state.exam.topResult) || [];

  const innitQuestion = [
    {
      nameQuestion: "",
      listAnswers: [],
    },
  ];
  const Questions = exam.listQuestion || innitQuestion;

  useEffect(() => {
    dispatch(examAction.getResultExam(examID));
    dispatch(examAction.getOne(param.id));
    dispatch(examAction.getTopResult(param.id));
  }, []);

  //------------------------------------------------------------return-----------------------------------------//

  useEffect(() => {
    if (!takeExam.isLoading && takeExam.isTaking === "taking") {
      navigate("/luyen-de/" + exam._id + "/vao-thi");
      localStorage.clear();
    } else if (!takeExam.isLoading && takeExam.isTaking === "notAccept") {
      takeExam.isTaking = "innit";
      alert(takeExam.error);
    }
  }, [takeExam]);

  const LeaderCard = (props) => {
    return (
      <div className="list-card">
        <Card className="leader-card">
          <div className="rank">
            {props.index + 1}.
            <div className="avata_group">
              <Avatar alt="Remy Sharp" src={props.data.userID.avatar} />
              <p>{props.data.userID.name}</p>
            </div>
          </div>

          <div className="score">Score: {props.data.maxScore}</div>
        </Card>
      </div>
    );
  };

  const takeExamHandleClick = () => {
    dispatch(examAction.CheckExamRequirement(exam._id));
  };

  return (
    <Container className="exam-result-wrapper" maxWidth="xl">
      <Grid container spacing={2} className="exam-grid">
        <Grid item xs={12} md={7} lg={8} className="exam-detail_content">
          <h1 className="title-result">Kết quả bài thi</h1>
          <p className="score-result">
            Bạn đã hoàn thành bài thi với số điểm:{" "}
            <b style={{ color: "#7B68EE" }}>
              {takeExam.resultExam.score ? takeExam.resultExam.score : "xxx"}/
              {takeExam.resultExam.userAnswer
                ? takeExam.resultExam.userAnswer.length
                : "xxx"}
            </b>
          </p>
          {Questions.map((val, idx) => (
            <div className="result-list" key={idx}>
              <p className="title-question">
                <b>Câu {idx + 1}:</b> {val.nameQuestion}{" "}
                {takeExam.resultExam?.userAnswer &&
                  takeExam.resultExam?.userAnswer[idx] === 0 && (
                    <i style={{ color: "#C30000" }}>-Chưa trả lời!</i>
                  )}
              </p>
              {Questions[idx].listAnswers.map((item, index) => (
                <div key={index}>
                  <label className="question-content">
                    {val.rightAnswer === index && (
                      <GoCheck style={{ color: "#7B68EE" }} />
                    )}
                    {takeExam.resultExam.userAnswer[idx] === index + 1 &&
                      takeExam.resultExam.userAnswer[idx] !==
                        val.rightAnswer + 1 && (
                        <TiDeleteOutline style={{ color: "#C30000" }} />
                      )}
                    {val.rightAnswer !== index &&
                      takeExam.resultExam.userAnswer[idx] !== index + 1 && (
                        <GoCheck style={{ color: "transparent" }} />
                      )}
                    <b style={{ marginLeft: "1rem" }}>{TranslateID[index]}.</b>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={5} lg={4} className="leader-board_column">
          <Button
            variant="contained"
            className="btn-contained"
            onClick={() => takeExamHandleClick()}
          >
            Thi lại
          </Button>
          <div className="leader-board_group">
            <h5>
              <GiQueenCrown></GiQueenCrown> Leaderboard
            </h5>

            {topResult.length > 1 &&
              topResult.map((val, idx) => (
                <LeaderCard key={idx} data={val} index={idx} />
              ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ExamResult;
