import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { TextField, Box, Grid, Stack, Button } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./ForgotPassword.scss";
import { maxWidth } from "@mui/system";
// import Container from '@mui/material/Container';
const ForgotPassword = () => {
  function VerifyAuthCode() {
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
          <h1 className="modal-title">XÁC NHẬN MẬT MÃ</h1>
          <p>
            Vui lòng kiểm tra email để nhận mã đặt lại mật khẩu gồm 8 chữ số.
          </p>
          <p>Chúng tôi đã gửi mật mã đến email: Hienthe993@gmail.com</p>

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
              label="Mã xác nhận: XXXXXXXX"
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
          <p style={{ marginBottom: "12px" }} className="resend-password">
            Gửi lại mã
          </p>
        </Stack>
      </div>
    );
  }

  function ResetPassword() {
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
          <h1 className="modal-title">XÁC NHẬN MÃ CODE ĐẶT LẠI MẬT KHẨU</h1>

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
              label="XXXXXX"
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
            <div className="se-btn outlined-btn">HỦY</div>
          </Stack>
          
          
        </Stack>
      </div>
    );
  }

  function ForgotPasswordModal() {
    return (
      <div className="sign-up-form-modal">
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
          <h1 className="modal-title">QUÊN MẬT KHẨU</h1>
          <p>Nhập email để tìm kiếm tài khoản của bạn</p>

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
              label="Email"
              type="email"
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

            <div className="se-btn login-btn">Gửi</div>
          </Stack>

          <p>
            Đã có tài khoản?
            <Link to="/dang-nhap">
              <strong>Đăng nhập</strong>
            </Link>
          </p>
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
          <ResetPassword />
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
