import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillReplyFill } from "react-icons/bs";
import LoginForm from './LoginForm';

function LoginWithUserNameAndPasswordModal(props) {
    return (
        <div className="login-with-username-and-password-modal">
        <div onClick={props.BackToChooseLoginMethodScreen} className="back-btn">
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
          <h1 className="modal-title">ĐĂNG NHẬP VÀO SE</h1>

          <Stack
            sx={{
              width: "80%",
              maxWidth: "500px",
            }}
            spacing={2}
            direction="column"
            margin="24px"
          >
            <LoginForm onSubmit={props.HandleSignInButtonOnClick} />
          </Stack>

          <p>
            <Link to="/quen-mat-khau">
              <strong>Quên mật khẩu</strong>
            </Link>
          </p>
          <p style={{ marginTop: "18px" }}>
            Chưa có tài khoản?{" "}
            <Link to="/dang-ky">
              <strong>Đăng ký</strong>
            </Link>
          </p>
        </Stack>
      </div>
    );
}

export default LoginWithUserNameAndPasswordModal;