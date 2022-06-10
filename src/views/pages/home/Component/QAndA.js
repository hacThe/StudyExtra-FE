import { Container, Grid } from "@mui/material";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import QuestionComponent from "./QuestionComponent";
function QAndA(props) {
  return (
    <div style={{ marginTop: "55px" }}>
      <Container maxWidth={false} container spacing={0}>
        <Grid container spacing={0}>
          <Grid md={12} sm={12}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Hỏi đáp
            </h1>
          </Grid>
          <Grid md={6} sm={6}>
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              Câu hỏi nổi bật
            </div>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "start",
            }}
            md={6}
            sm={6}
          >
            <a
              href="#"
              style={{
                fontSize: "12px",
                textDecoration: "none",
                color: "#7B68EE",
                fontWeight: "600",
                display: "flex",
              }}
            >
              <div>Xem thêm</div>
              <FiChevronsRight
                style={{
                  paddingLeft: "5px",
                  fontSize: "20px",
                  transform: "translateY(-10%)",
                }}
              ></FiChevronsRight>
            </a>
          </Grid>
          {props.articles.reverse().map((article, key) => {
            if (key > props.articles.length - 5)
              return (
                <Grid key={key} md={6} sm={12}>
                  <QuestionComponent
                    post={props.posts[key]}
                    article={article}
                  ></QuestionComponent>
                </Grid>
              );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default QAndA;
