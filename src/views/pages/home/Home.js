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
import { appActions } from "../../../actions";
import { articleActions } from '../../../actions/article.action';

const Login = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses) || [];
  const posts = useSelector((state) => state.post.posts) || [];
  const articles = useSelector((state) => state.article.articles) || [];

  useEffect(() => {
    dispatch(courseAction.getAllCourse());
    dispatch(postAction.getAllPost());
    dispatch(articleActions.getAllArticle());
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
          <Notification></Notification>
          <YourCourses courses={courses}></YourCourses>
          <FeaturedCourse courses={courses}></FeaturedCourse>
          <QAndA posts={posts} articles={articles}></QAndA>

          <span
            onClick={() => {
              dispatch(
                appActions.openConfirmDialog("THis is content", () => {
                  console.log("haha");
                })
              );
            }}
            className="se-btn"
          >
            Click me
          </span>
        </div>
      </Container>
    </>
  );
};

export default Login;
