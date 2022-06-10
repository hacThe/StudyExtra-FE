import React from "react";
import { Container, Grid } from "@mui/material";
import CardCourses from "./CardCourses";
import { useSelector } from "react-redux";
function YourCourses(props) {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div style={{}}>
      <Container maxWidth="false" container spacing={2}>
        <Grid container spacing={2}>
          {props.courses.length !== 0 ? (
            props.courses.map((course, num) => {
              if (
                num < props.currentPageInYourCourses * 8 &&
                num >= (props.currentPageInYourCourses - 1) * 8
              ) {
                return (
                  <Grid md={3} sm={3}>
                    <CardCourses course={course} isPayment={true}></CardCourses>
                  </Grid>
                );
              }
            })
          ) : (
            <div
              style={{
                textAlign: "center",
                margin: "20px 0",
                width: "100%",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              Bạn hiện chưa có khóa học nào
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default YourCourses;
