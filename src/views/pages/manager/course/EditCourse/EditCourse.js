import React from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import './EditCourse.scss'
import SingleCourseForm from "../component/SingleCourseForm";
function EditCourse(props) {
  return (
    <div className="manager-fa-ke-modal edit-course-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
          <LeadingIconButton icon={<BiHide />} content="Ẩn" />
          <LeadingIconButton icon={<AiOutlineDelete />} content="Xóa" />
        </div>
      </div>

      <SingleCourseForm course={/*Truyền course vào đây */ undefined}/>
    </div>
  );
}

export default EditCourse;
