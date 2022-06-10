import React, { useEffect } from "react";
import { Container } from "@mui/material";

import Slider from "./Component/Slider";
import Notification from "./Component/Notification";
import YourCourses from "./Component/YourCourses";
import FeaturedCourse from "./Component/FeaturedCourse";
import QAndA from "./Component/QAndA";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../../actions/course.action";
import { postAction } from "../../../actions/post.action";
import { appActions, userActions } from "../../../actions";
import axios from "axios";
import URL from "../../../services/api/config";
import { articleActions } from "../../../actions/article.action";

const Login = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses) || [];
  const posts = useSelector((state) => state.post.posts) || [];
  const articles = useSelector((state) => state.article.articles) || [];
  const authentication = useSelector((state) => state.authentication) || {};
  const UserInfo = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    dispatch(courseAction.getAllCourse());
    dispatch(postAction.getAllPost());
    dispatch(articleActions.getAllArticle());
    dispatch(userActions.getCurrentUser());
  }, [dispatch]);

  // console.log("articles", articles)
  return (
    <>
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          borderRadius: "10px",
          marginTop: "24px",
          boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.1);",
        }}
        maxWidth="xl"
      >
        <div className="home-wrapper">
          <Slider></Slider>
          {authentication?.isLoggedIn && <Notification></Notification>}
          <FeaturedCourse courses={courses}></FeaturedCourse>
          {authentication?.isLoggedIn && (
            <YourCourses
              style={{ marginTop: "24px" }}
              courses={UserInfo?.courseID || []}
            ></YourCourses>
          )}
          <img
            style={{ borderRadius: "10px", marginTop: "36px" }}
            src="./img/banner.png"
            width="100%"
            alt=""
          />
          {authentication?.isLoggedIn && (
            <QAndA posts={posts} articles={articles}></QAndA>
          )}
          <h1
            style={{
              fontSize: "",
              fontSize: "3rem",
              textAlign: "center",
              marginTop: "100px",
              marginBottom: "36px",
            }}
          >
            Khách hàng nói gì về Study Extra
          </h1>
          <img
            style={{
              borderRadius: "10px",
              marginTop: "36px",
              margin: "auto",
            }}
            src="./img/testimonia.png"
            width="100%"
            alt=""
          />
        </div>
      </Container>
    </>
  );
};

export default Login;
