import React, { useEffect, useState } from "react";
import "./CourseDetail.scss";
import { Grid } from "@mui/material";
import IntroVideoModal from "./component/IntroVideoModal";
import CourseDetailLeftSide from "./component/CourseDetailLeftSide";
import CourseDetailRightSide from "./component/CourseDetailRightSide";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../../actions/course.action";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../../../services/api/config";
import youtube_parser from "../../../../utilities/ConvertDocsToMultipleChoice.util copy";

const CourseDetail = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const course = useSelector((state) => state.course.course);
  const infoUser = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log("ID nè: ", id);
    dispatch(courseAction.getOne(id, infoUser._id));
  }, []);
  console.log("Course nè", course);
  const navigate = useNavigate();
  const buyCourse = async () => {
    if (
      course &&
      course.studentIds &&
      course.studentIds.includes(infoUser._id)
    ) {
      console.log("registed")
      navigate(`/bai-hoc/:id`);
    } else {
      console.log("Buy");
      await axios
        .post(URL.URL_BUY_COURSE, { id, username: infoUser.username })
        .then((res) => {
          console.log("hello");
          navigate(`/bai-hoc/:id`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="course-detail-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CourseDetailLeftSide course={course}></CourseDetailLeftSide>
        </Grid>
        <Grid item xs={4}>
          <CourseDetailRightSide
            buyCourse={buyCourse}
            registed={course.studentIds?.includes(infoUser._id) || false}
            course={course}
            toogle={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </Grid>
      </Grid>

      {modalVisible && (
        <IntroVideoModal
          courseName={course.name}
          videoId={youtube_parser(course.introVideoUrl)}
          toogle={() => {
            setModalVisible(!modalVisible);
          }}
        />
      )}
    </div>
  );
};

export default CourseDetail;
