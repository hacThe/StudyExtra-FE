import React from "react";
import BackToPageButton from "../../../../components/BackToPageButton";
import SingleLessonForm from "../component/SingleLessonForm";

function AddLesson(props) {
  return (
    <div className="manager-fa-ke-modal add-lesson-wrapper">
      <div className="justify-content-between top-action-bar">
        <BackToPageButton content="Trở lại trang trước" />
      </div>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Thêm bài học</h1>
      <p
        style={{
          fontSize: "1.4rem",
          textAlign: "center",
          marginTop: "12px",
          marginBottom: "36px",
        }}
      >
        Khóa học: Tên khóa học
      </p>

      <SingleLessonForm />
    </div>
  );
}

export default AddLesson;
