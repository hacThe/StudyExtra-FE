import React from "react";
import SingleExamForm from "../component/SingleExamForm";
import BackToPageButton from "../../../../components/BackToPageButton";
import LeadingIconButton from "../../../../components/LeadingIconButton";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import './EditExam.scss'
function EditExam(props) {
  return (
    <div className="manager-fa-ke-modal edit-exam-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
        <div className="course-action align-center">
          <LeadingIconButton icon={<BiHide />} content="Ẩn" />
          <LeadingIconButton icon={<AiOutlineDelete />} content="Xóa" />
        </div>
      </div>
      <SingleExamForm/>
    </div>
  );
}

export default EditExam;
