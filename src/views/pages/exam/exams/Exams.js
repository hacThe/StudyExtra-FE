import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../component/filter";
import ExamCard from "../component/examCard";
import PaginationOutlined from "../component/PaginationOutlined";

import { Container } from "@mui/material";
import "./Exams.scss";
import { examAction } from "../../../../actions/exam.actions";
import { exam } from "../../../../reducers/exam.reducer";

const Exams = () => {
  const dispatch = useDispatch();
  const exams = useSelector((state) => state.exam.exams) || [];
  const [typeExam, setTypeExam] = useState("Tất cả");
  const [sortExam, setSortExam] = useState("0");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  var examWithFilter = useSelector((state) => state.exam.exams) || [];
  useEffect(() => {
    dispatch(examAction.getAll());
  }, []);

  if (typeExam !== "Tất cả") {
    examWithFilter = [];
    exams.forEach(function (value) {
      if (value.typeCategory === typeExam) examWithFilter.push(value);
    });
  } else {
    examWithFilter = [...exams];
  }

  if (sortExam !== "0") {
    ///sort
    switch (sortExam) {
      case "1":
        examWithFilter.sort(function (a, b) {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        break;
      case "2":
        examWithFilter.sort(function (a, b) {
          return new Date(a.updatedAt) - new Date(b.updatedAt);
        });
        break;
      case "3":
        examWithFilter.sort(function (a, b) {
          return new Date(b.attempt) - new Date(a.attempt);
        });
        break;
    }
  }

  var examWithFilterPage = examWithFilter.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="exam-wrapper">
      <Container className="exam">
        <Filter
          setTypeExam={setTypeExam}
          typeExam={typeExam}
          setSortExam={setSortExam}
        />
        <div className="list-exam">
          {examWithFilterPage.map((val, idx) => (
            <ExamCard key={idx} ExamInfomation={val} />
          ))}
        </div>
        <PaginationOutlined
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          index={examWithFilter.length}
          itemPerPage={itemPerPage}
        ></PaginationOutlined>
      </Container>
    </div>
  );
};
export default Exams;
