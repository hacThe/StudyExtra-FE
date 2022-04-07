import React from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import "./CourseDetailManager.scss";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import CourseDetailLeftSide from "../../../course/courseDetail/component/CourseDetailLeftSide";
function CourseDetailManager(props) {
  return (
    <div className="manager-fa-ke-modal course-detail-manager-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Danh sách khóa học" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<AiOutlineExport />} content="Xuất Excel" />
          <LeadingIconButton icon={<AiOutlineEdit />} content="Chỉnh sửa" />
          <LeadingIconButton icon={<BiHide />} content="Ẩn" />
          <LeadingIconButton icon={<AiOutlineDelete />} content="Xóa" />
        </div>
      </div>
      <CourseDetailLeftSide />

      <h1>THis is student table</h1>
    </div>
  );
}

export default CourseDetailManager;
