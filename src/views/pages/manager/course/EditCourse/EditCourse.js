import React, { useEffect } from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import "./EditCourse.scss";
import SingleCourseForm from "../component/SingleCourseForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { courseAction } from "../../../../../actions/course.action";
function EditCourse(props) {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  const {id} = useParams();

  useEffect(() => {
    if (!course || !course.name) {
      dispatch(courseAction.getOne(id));
    }
  }, []);

  const onSubmit = (values)=>{
    dispatch(courseAction.update(id, values))
  }

  const handleToogleIsHideClick = () => {
    dispatch(courseAction.update(id, {isHide: !course.isHide}))
  }

  console.log({ course }, "course nè nha");
  return (
    <div className="manager-fa-ke-modal edit-course-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
          <LeadingIconButton onClick={handleToogleIsHideClick} icon={<BiHide />} content={course.isHide ? "Hủy ẩn" : "Ẩn"} />
          <LeadingIconButton icon={<AiOutlineDelete />} content="Xóa" />
        </div>
      </div>

      <SingleCourseForm onSubmit={onSubmit} course={/*Truyền course vào đây */ course} />
    </div>
  );
}

export default EditCourse;
