import React, { useEffect, useState } from "react";
import Slider from "./Component/Slider";
import Notification from "./Component/Notification";
import YourCourses from "./Component/YourCourses";
import FeaturedCourse from "./Component/FeaturedCourse";
import QAndA from "./Component/QAndA";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from '../../../actions/course.action'
import { postAction } from "../../../actions/post.action";
const Login = () => {
  const dispatch = useDispatch()

  const courses = useSelector(state => state.course.courses) || []
  const posts = useSelector(state => state.post.posts) || []

  console.log(courses)
  console.log(posts)
  useEffect(() => {
    dispatch(courseAction.getAllCourse());
    dispatch(postAction.getAllPost())
  }, [])


  return (
    <>
      <div className="home-wrapper">
        <Slider></Slider>
        <Notification></Notification>
        <YourCourses courses={courses}></YourCourses>
        <FeaturedCourse courses={courses}></FeaturedCourse>
        <QAndA posts={posts}></QAndA>
      </div>
    </>
  );
};

export default Login;
