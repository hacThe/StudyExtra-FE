import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { usersServices } from "../../../../../services";
import { transactionServices } from "../../../../../services/transaction.services";
import { userActions } from "../../../../../actions";
import { useDispatch } from "react-redux";

function DepositeGemModal({ open, user, handleClose }) {
  console.log({ open, user, handleClose });
  const [amount, setAmount] = useState();
  const style = {
    position: "absolute",
    maxWidth: "500px",
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
  const dispatch = useDispatch();

  const handleSubmitChange = () => {
    if (parseInt(user.gem) + parseInt(amount) < 0) return;
    else {
      dispatch(
        userActions.editUserGem(parseInt(amount), user._id, handleClose)
      );
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
          Thay đổi GEM tải khoản
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        >
          {`${user.username} (${user.gem} GEM)`}
        </p>
        <label htmlFor="amount">Thay đổi</label>
        <input
          style={{ width: "100%", marginBottom: "12px" }}
          id="amount"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        {parseInt(user.gem) + parseInt(amount) < 0 && (
          <p className="input-error-validation">Số GEM còn lại bé hơn 0</p>
        )}

        <span onClick={handleSubmitChange} className="se-btn">
          Xác nhận
        </span>
      </Box>
    </Modal>
  );
}

export default DepositeGemModal;
