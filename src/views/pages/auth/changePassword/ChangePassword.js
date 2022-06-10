import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { TextField, Box, Grid, Stack, Button } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./ChangePassword.scss";
import { maxWidth } from "@mui/system";
// import Container from '@mui/material/Container';
const ForgotPassword = () => {
 
 
  function ChangePassword() {
    return (
      <div className="sign-up-form-modal">
        <div className="back-btn">
          <BsFillReplyFill />
        </div>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#fff",
            maxWidth: "800px",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <div className="app-logo" />
          <h1 className="modal-title">ĐẶT LẠI MẬT KHẨU</h1>

          <Stack
            sx={{
              width: "80%",
              maxWidth: "500px",
            }}
            spacing={2}
            direction="column"
            margin="24px"
          >
            <TextField
              id="outlined-basic"
              label="Mật khẩu mới"
              type="password"
              variant="outlined"
              InputProps={{
                style: { borderRadius: "30px", paddingLeft: "18px" },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "'Montserrat', san-serif",
                  borderColor: "white",
                  borderColor: "black",
                },
              }}
            />

            <TextField
              id="outlined-basic"
              label="Xác nhận mật khẩu"
              type="password"
              variant="outlined"
              InputProps={{
                style: { borderRadius: "30px", paddingLeft: "18px" },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "'Montserrat', san-serif",
                  borderColor: "white",
                  borderColor: "black",
                },
              }}
            />

            <div className="se-btn login-btn">XÁC NHẬN</div>
          </Stack>
          
        </Stack>
      </div>
    );
  }

  return (
    <>
      <div className="sign-up-page-wrapper">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100vh",
          }}
        >

          <ChangePassword/>
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
