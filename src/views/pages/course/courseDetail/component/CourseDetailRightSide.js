import React, { useState } from "react";
import { dividerClasses, Grid } from "@mui/material";
import "../CourseDetail.scss";
import {AiFillPlayCircle} from "react-icons/ai";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
const CourseDetailRightSide = (props) => {



  return (
    <div className="right-side-wrapper">
      <div onClick={props.toogle} className="course-intro-video">
        <img src="https://t3.ftcdn.net/jpg/03/75/29/46/360_F_375294645_YZ1qfcGxbLoLmLLVCCbIC1G8bOblM8Rk.jpg" alt="" />
        <AiFillPlayCircle className="play-icon"/>
      </div>

      <div className="course-price align-center">
        <span className="price">{`${500}`}</span>
        <RiMoneyDollarCircleFill className="coin"/>
      </div>

      <div className="se-btn">Đăng ký</div>
      <p className="se-slogan">Tri thức ở đâu chúng tôi vươn cao tới đó</p>

    
    </div>
  );
};

export default CourseDetailRightSide;
