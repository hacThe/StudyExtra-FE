import React, { useEffect, useState } from "react";
import Slider from "./Component/Slider";
import Notification from "./Component/Notification";
import YourCourses from "./Component/YourCourses";
import FeaturedCourse from "./Component/FeaturedCourse";
import QAndA from "./Component/QAndA";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const [courses, setCourses] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    async function fetchData() {
      await axios.get(`http://localhost:5000/api/courses/getAllCourses`)
        .then(res => {
          setCourses(res.data.data)
        }).catch(err => {
          console.log(err)
        })
      await axios.get(`http://localhost:5000/api/posts/getAllPosts`)
      .then(res => {
        setPosts(res.data.data)
      }).catch(err=>{
        console.log(err)
      })
    }
    fetchData();
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
