import React, { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import "./GeneralStatistics.scss";
import { styled } from "@mui/material/styles";
import axios from "axios";
import URL from "../../../../../services/api/config";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function GeneralStatistics(props) {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetApi = async () => {
      await axios.get(URL.URL_GET_LIST_USER).then((res) => {
        setUsers(res.data.data);
        setCourses(res.data.courses.length);
      });
    };
    fetApi();
  }, []);

  const renderRating = () => {
    let indexRating = 0;
    let timesRating = 0;
    users.forEach((value) => {
      value.courseID.forEach((course) => {
        indexRating += course.rating;
        timesRating++;
      });
    });
    return (indexRating / timesRating).toFixed(1);
  };

  return (
    <Container className="general-statistic">
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
          <div
            className="card-general-statistic"
            style={{ backgroundColor: "#1F1498" }}
          >
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-data"
            >
              {users.length}
            </p>
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-description"
            >
              Người dùng đang hoạt động
            </p>
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <div
            className="card-general-statistic"
            style={{ backgroundColor: "#0060B9" }}
          >
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-data"
            >
              {users
                .reduce((total, item) => {
                  if (item.courseID.length > 0) {
                    item.courseID.map((value) => {
                      return (total += value.price);
                    });
                  }
                  return total;
                }, 0)
                .toLocaleString()}
              {` GEM`}
            </p>
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-description"
            >
              Tổng doanh thu
            </p>
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <div
            className="card-general-statistic"
            style={{ backgroundColor: "#DE9A27" }}
          >
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-data"
            >
              {courses ? courses : "Chưa có khóa học"}
            </p>
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-description"
            >
              Khóa học
            </p>
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <div
            className="card-general-statistic"
            style={{ backgroundColor: "#7B68EE" }}
          >
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-data"
            >
              {renderRating()}/5
            </p>
            <p
              style={{ fontFamily: "'Montserrat', san-serif" }}
              className="card-general-statistic-description"
            >
              Trong tổng 2000 lượt đánh giá
            </p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GeneralStatistics;
