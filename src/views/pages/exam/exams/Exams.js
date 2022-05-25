import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../component/filter";
import ExamCard from "../component/examCard";
import PaginationOutlined from "../component/PaginationOutlined";

import { Container } from "@mui/material";
import "./Exams.scss";
import { examAction } from "../../../../actions/exam.actions";

const Exams = () => {
  const dispatch = useDispatch();
  const exams = useSelector(state => state.exam.exams) || [];

  useEffect(() => {
    dispatch(examAction.getAll());
  }, [])

  return (
    <div className="exam-wrapper">
      <Container className="exam">
        <Filter></Filter>
        <div className="list-exam">
          {exams.map((val, idx) => (
            <ExamCard key={idx} ExamInfomation={val}></ExamCard>
          ))}
        </div>
        <PaginationOutlined setCurrentPage={2} index={30}></PaginationOutlined>
      </Container>
    </div>
  );
};
export default Exams;
