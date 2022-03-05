import React, { useState } from "react";
import "./CourseDetail.scss";
import { Grid } from "@mui/material";
import IntroVideoModal from "./component/IntroVideoModal";
import CourseDetailLeftSide from "./component/CourseDetailLeftSide";
import CourseDetailRightSide from "./component/CourseDetailRightSide";
const CourseDetail = (props) => {


  const [modalVisible, setModalVisible] = useState(false)

  

  return (
    <div className="course-detail-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CourseDetailLeftSide></CourseDetailLeftSide>
        </Grid>
        <Grid item xs={4}>
          <CourseDetailRightSide toogle={()=>{setModalVisible(!modalVisible)}}/>
        </Grid>
      </Grid>

      { modalVisible && <IntroVideoModal toogle={()=>{setModalVisible(!modalVisible)}} />}
    </div>
  );
};

export default CourseDetail;
