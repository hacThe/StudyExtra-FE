import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "../component/filter";
import ExamCard from "../component/examCard";
import PaginationOutlined from "../component/PaginationOutlined";

import { Container } from "@mui/material";
import "./Exams.scss";

const Exams = () => {
  return (
    <div className="exam-wrapper">
      <Container className="exam">
        <Filter></Filter>
        <div className="list-exam">
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
          <ExamCard></ExamCard>
        </div>
        <PaginationOutlined setCurrentPage={2} index={30}></PaginationOutlined>
      </Container>
    </div>
  );
};
export default Exams;
