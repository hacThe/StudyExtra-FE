import { Box, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TheContent.scss"
function ConfirmActionModal(props) {
  const dispatch = useDispatch();
  const confirmActionModal = useSelector(
    (state) => state.app.confirmActionModal
  );

  const handleClose = () => {
    dispatch({
      type: "set",
      confirmActionModal: {
        open: false,
        action: undefined,
      },
    });
  };

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
      open={confirmActionModal.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-container-fe">
          <h1>Xác nhận thao tác</h1>
          <p>{confirmActionModal.content}</p>
          <div className="action-btn">
            <span onClick={handleClose} className="se-btn hover-blur">HỦY</span>
            <span onClick={confirmActionModal.action} className="se-btn">ĐỒNG Ý</span>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ConfirmActionModal;
