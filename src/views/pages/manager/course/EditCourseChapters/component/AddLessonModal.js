import React from "react";
import { Box, Modal } from "@mui/material";
import SingleLessonForm from "../../component/SingleLessonForm";
import { useDispatch } from "react-redux";
import { courseAction } from "../../../../../../actions/course.action";

function AddLessonModal({ open, handleClose, editModal, course, chapter }) {
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
    dispatch(courseAction.addLesson(values, handleClose ))
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Thêm bài học</h1>
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        >
          Khóa học: {course.name}
        </p>
        <SingleLessonForm
          chapter={chapter}
          course={course}
          onSubmit={onSubmit}
        />
      </Box>
    </Modal>
  );
}

export default AddLessonModal;
