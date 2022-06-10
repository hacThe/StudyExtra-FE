import React, { useState } from "react";
import { dividerClasses, Grid } from "@mui/material";
import "../CourseDetail.scss";
import {AiFillPlayCircle} from "react-icons/ai";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
const CourseDetailRightSide = ({registed, course, toogle, buyCourse}) => {



  return (
    <div className="right-side-wrapper">
      <div onClick={toogle} className="aspect-ratio  course-intro-video">
        <img src={course.imgUrl} alt="" />
        <AiFillPlayCircle className="play-icon"/>
      </div>

      <div className="course-price align-center">
        <span className="price">{`${course.price}`}</span>
        <RiMoneyDollarCircleFill className="coin"/>
      </div>

      <div onClick={() => buyCourse()} className="se-btn">{ registed ? "Vào học": "Đăng ký"}</div>
      <p className="se-slogan">Tri thức ở đâu chúng tôi vươn cao tới đó</p>

    
    </div>
  );
};

export default CourseDetailRightSide;
