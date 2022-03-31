import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userActions } from "../../../../actions/user.actions";
import { cookiesUtil } from "../../../../utilities";
import { TextField, Box, Grid, Stack, Button } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./Login.scss";

const Login = () => {
  // currentPage đại diện cho page đang hiển thị, 0: Login method, 1: LoginWithUserNameAndPassword
  const [currentPage, setPage] = useState(0);
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  let username = "";
  let password = "";

  function GoToLoginWithUsernameAndPasswordScreen() {
    setPage(1);
  }

  function BackToChooseLoginMethodScreen() {
    setPage(0);
  }

  function HandleSignInButtonOnClick() {
    // cookiesUtil.set("THIS IS USER IDENTIFY KEY", "haizz");
    // dispatch(userActions.login());
    dispatch(userActions.login(username, password));
  }

  if (authentication.isLoggedIn) return <Navigate to="/trang-chu" />;

  function ListOfLoginMethod() {
    return (
      <div className="list-of-login-method-modal">
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
          <h1 className="modal-title">Đăng nhập vào SE</h1>

          <Stack
            sx={{
              width: "80%",
              maxWidth: "500px",
            }}
            spacing={2}
            direction="column"
            margin="24px"
          >
            <div
              onClick={GoToLoginWithUsernameAndPasswordScreen}
              className="se-btn outline-btn"
            >
              Đăng nhập với username/ password
            </div>

            <div className="se-btn google-login">
              <BsGoogle />
              <div className="full-width-text">Đăng nhập với Google</div>
            </div>

            <div className="se-btn facebook-login">
              <BsFacebook />
              <div className="full-width-text">Đăng nhập với Facebook</div>
            </div>
          </Stack>

          <p>
            Chưa có tài khoản?{" "}
            <Link to="/dang-ky">
              <strong>Đăng ký</strong>
            </Link>
          </p>
        </Stack>
      </div>
    );
  }

  function LoginWithUserNameAndPassword() {
    return (
      <div className="login-with-username-and-password-modal">
        <div onClick={BackToChooseLoginMethodScreen} className="back-btn">
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
            <TextField
              onChange={(e) => {
                username = e.target.value;
              }}
              label="Tài khoản"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  paddingLeft: "12px",
                  fontSize: "1.4rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "'Montserrat', san-serif",
                  fontSize: "1.4rem",
                },
              }}
            />
            <TextField
              onChange={(e) => {
                password = e.target.value
              }}
              label="Mật khẩu"
              variant="outlined"
              type="password"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  paddingLeft: "18px",
                  fontSize: "1.4rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "'Montserrat', san-serif",
                  fontSize: "1.4rem",
                },
              }}
            />

            <div
              onClick={HandleSignInButtonOnClick}
              className="se-btn login-btn"
            >
              Đăng nhập
            </div>
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

  return (
    <>
      <div className="login-page-wrapper">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100vh",
          }}
        >
          {currentPage == 0 && <ListOfLoginMethod></ListOfLoginMethod>}

          {currentPage == 1 && <LoginWithUserNameAndPassword />}
        </Stack>
      </div>
    </>
  );
};

export default Login;
