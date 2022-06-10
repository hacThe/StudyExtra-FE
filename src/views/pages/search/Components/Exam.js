import React, { useEffect } from "react";
import "../Search.scss";
import ExamCard from "./ExamCard";
import PaginationOutlined from "./PaginationOutlined";
import { useState } from "react";
function Exam(props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [props.exam]);

  const setCurrentPage = (num) => {
    setPage(num);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {props.exam.length !== 0 ? (
        props.exam.map((exam, num) => {
          if (num < page * 8 && num >= (page - 1) * 8) {
            return <ExamCard key={num} exam={exam}></ExamCard>;
          }
          return null;
        })
      ) : (
        <h1 style={{ fontSize: "16px", margin: "50px" }}>
          Không có kết quả tìm kiếm
        </h1>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <PaginationOutlined
          setCurrentPage={setCurrentPage}
          page={page}
          index={props.exam.length}
        ></PaginationOutlined>
      </div>
    </div>
  );
}

export default Exam;
