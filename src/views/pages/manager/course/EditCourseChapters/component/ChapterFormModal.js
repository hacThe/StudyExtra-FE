import { Box, Modal } from '@mui/material';
import React from 'react';
import SingleChapterForm from '../../component/SingleChapterForm';

function ChapterFormModal({open, handleClose, editModal, course, chapter, onSubmit}) {
  console.log(
    {open, handleClose, editModal, course, chapter, onSubmit}
  )
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        padding: "48px",
        bgcolor: "#fff",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
      };
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{ textAlign: "center" }}>{editModal ? "Chỉnh sửa thông tin chương" : "Thêm chương mới"}</h1>
          <SingleChapterForm editModal={editModal} onCanCel={handleClose} course={course} chapter={chapter} onSubmit={onSubmit} />
        </Box>
      </Modal>
    );
}

export default ChapterFormModal;