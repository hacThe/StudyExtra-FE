import { Container, Grid } from "@mui/material";
import React from "react";
import SliderCourses from "./SliderCourses";
function FeaturedCourse(props) {
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
              Khóa học nổi bật
            </h1>
          </Grid>
        </Grid>
      </Container>
      <div style={{ position: "absolute", width: "95%", top: "10%" }}>
        <SliderCourses courses={props.courses}></SliderCourses>
      </div>
    </div>
  );
}

export default FeaturedCourse;
