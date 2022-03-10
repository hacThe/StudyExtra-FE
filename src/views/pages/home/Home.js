import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
import { useNavigate } from "react-router-dom";
import Slider from "./Component/Slider";
import Notification from "./Component/Notification";
import YourCourses from "./Component/YourCourses";
import FeaturedCourse from "./Component/FeaturedCourse";
import QAndA from "./Component/QAndA";
// import 'bootstrap/dist/css/bootstrap.min.css';
  
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function HandleLogOutOnClick(){
    navigate('/dang-nhap');
    dispatch(userActions.logout())
  }


  return (
    <>
      <div className="home-wrapper">
        <Slider></Slider>
        <Notification></Notification>
        <YourCourses></YourCourses>
        <FeaturedCourse></FeaturedCourse>
        <QAndA></QAndA>
      </div>
     
    </>
  );
};

export default Login;
