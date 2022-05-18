import React from "react";
import { Box, Modal } from "@mui/material";
import SingleLessonForm from "../../component/SingleLessonForm";
import { useDispatch } from "react-redux";
import { courseAction } from "../../../../../../actions/course.action";

function EditLessonModal({ open, handleClose, course, chapter, lesson }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    padding: "48px",
    bgcolor: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch()


  const onSubmit = (values) => {
    dispatch(courseAction.editLesson(values, handleClose ))
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Chỉnh sửa bài học</h1>
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        >
          Khóa học: {course.name}
          <br></br>
          Chương: {chapter.name}
        </p>
        <SingleLessonForm
        editModal={true}
          chapter={chapter}
          course={course}
          lesson={lesson}
          onSubmit={onSubmit}
        />
      </Box>
    </Modal>
  );
}

export default EditLessonModal;
