import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { courseAction } from "../../../../../actions/course.action";
import SingleCourseForm from "../component/SingleCourseForm";


function AddCourse(props) {
  const blankCourse = {
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    introVideoUrl: "",
    contents: [],
    categories: [],
    requirements: [],
  };
  const navigate = useNavigate();

  const dispatch = useDispatch()


  const onSubmit = (values)=>{
    dispatch(courseAction.create(values, navigate));
  }
  return (
    <div className="manager-fa-ke-modal edit-course-wrapper">
      <h1
        style={{
          textAlign: "center",
          margin: "24px auto",
          fontSize: "2.8em",
          marginBottom: "48px",
        }}
      >
        Thêm khóa học
      </h1>
      <SingleCourseForm onSubmit={onSubmit} course={blankCourse} />
    </div>
  );
}

export default AddCourse;
