import React, { useEffect, useState } from "react";
import "./CourseDetail.scss";
import { Grid } from "@mui/material";
import IntroVideoModal from "./component/IntroVideoModal";
import CourseDetailLeftSide from "./component/CourseDetailLeftSide";
import CourseDetailRightSide from "./component/CourseDetailRightSide";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../../actions/course.action";
import { useParams } from "react-router-dom";
const CourseDetail = (props) => {


  const [modalVisible, setModalVisible] = useState(false)
  const course = useSelector(state=>state.course.course)
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(()=>{
    console.log("ID nè: ", id)
    dispatch(courseAction.getOne(id))
  },[])
  console.log("Course nè", course)


  return (
    <div className="course-detail-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CourseDetailLeftSide course={course}></CourseDetailLeftSide>
        </Grid>
        <Grid item xs={4}>
          <CourseDetailRightSide course={course} toogle={()=>{setModalVisible(!modalVisible)}}/>
        </Grid>
      </Grid>

      { modalVisible && <IntroVideoModal courseName={course.name} videoId={course.introVideoUrl} toogle={()=>{setModalVisible(!modalVisible)}} />}
    </div>
  );
};

export default CourseDetail;
