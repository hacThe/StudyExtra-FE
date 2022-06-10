import { Container, Grid } from "@mui/material";
import React from "react";
import SliderCourses from "./SliderCourses";
function YourCourses(props) {
  return (
    <div
      style={{
        marginTop: "55px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "300px",
      }}
    >
      <Container maxWidth={false} container spacing={0}>
        <Grid container spacing={0}>
          <Grid md={12} sm={12}>
            <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
              Khóa học của bạn
            </h1>
          </Grid>
        </Grid>
      </Container>
      <div style={{ position: "absolute", width: "95%", top: "10%" }}>
        {props.courses.length !== 0 ? (
          <SliderCourses
            isPayment={true}
            courses={props.courses}
          ></SliderCourses>
        ) : (
          <div
            style={{
              paddingTop: "80px",
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
      </div>
    </div>
  );
}

export default YourCourses;
