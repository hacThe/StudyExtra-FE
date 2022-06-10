import React from "react";
import PaginationOutlined from "./PaginationOutlined";
import { Container, Grid } from "@mui/material";
import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";

function Courses(props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [props.exam]);

  const setCurrentPage = (num) => {
    setPage(num);
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <Container maxWidth={false} container spacing={2}>
        <Grid container spacing={2}>
          {props.course.length !== 0 ? (
            props.course.map((course, num) => {
              if (num < page * 8 && num >= (page - 1) * 8) {
                return (
                  <Grid md={3} sm={3}>
                    <CourseCard key={num} course={course}></CourseCard>
                  </Grid>
                );
              }
            })
          ) : (
            <h1 style={{ fontSize: "16px", margin: "50px" }}>
              Không có kết quả tìm kiếm
            </h1>
          )}
        </Grid>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PaginationOutlined
          setCurrentPage={setCurrentPage}
          page={page}
          index={props.course.length}
        ></PaginationOutlined>
      </div>
    </div>
  );
}

export default Courses;
