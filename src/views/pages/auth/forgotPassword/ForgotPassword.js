import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usersServices } from "../../../../services";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box, Grid, Stack, Button, useForkRef } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./ForgotPassword.scss";
import { maxWidth } from "@mui/system";
// import Container from '@mui/material/Container';
const ForgotPassword = () => {
  // 0: ForgotPasswordModal, 1
  const [currentPage, setPage] = useState(0);
  const username = useRef();
  const verifyCode = useRef();
  const targetEmail = useRef();
  const navigate = useNavigate();


  function backButtonOnClick() {
    setPage(currentPage - 1);
  }


  //------------------------------------------------------verify code-----------------------------------//
  function VerifyAuthCode(props) {
    const [inputCode, setInputCode] = useState("");
    function VerifyCodeOnClick() {
      usersServices.verifyCode(props.username.current, inputCode).then(
        (data) => {
          alert(data.message);
          props.verifyCode.current = inputCode;
          setPage(2);
        },
        (error) => {
          alert(error.toString());
        }
      )
    }

    function resendCodeOnClick() {
      // execute re-send verify code
      usersServices.sendVerifyCode(props.username.current).then(
        (data) => {
          alert("Verify code has just sent to email: *******" + data.email.slice(7));
          props.targetEmail.current = data.email;
          setPage(1);
        },
        (error) => {
          alert(error.toString());
        }
      )
    }

    return (
      <div className="sign-up-form-modal">
        <div onClick={backButtonOnClick} className="back-btn">
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
          <p>Chúng tôi đã gửi mã xác nhận đến email: *******{props.targetEmail.current.slice(7)}</p>

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
              value={inputCode}
              onChange={e => setInputCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && VerifyCodeOnClick()}
              InputProps={{
                style: {
                  borderRadius: "30px",
                  paddingLeft: "18px",
                  fontSize: "1.5rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "'Montserrat', san-serif",
                  fontSize: "1.4rem",
                  borderColor: "white",
                  borderColor: "black",
                },
              }}
            />

            <button onClick={VerifyCodeOnClick} className="se-btn login-btn">
              XÁC NHẬN
            </button>
          </Stack>
          <p
            onClick={resendCodeOnClick}
            style={{ fontSize: "1.4rem", marginBottom: "12px" }}
            className="resend-password"
          >
            Gửi lại mã
          </p>
        </Stack>
      </div>
    );
  }
  //-----------------------------------------ResetPassword--------------------------------------//
  function ResetPassword(props) {
    function VerifyResetPasswordOnClick(password) {
      // execute reset password
      usersServices.setNewPassword(props.username.current, props.verifyCode.current, password).then(
        (data) => {
          alert("Reset password successfully");
          console.log(data);
          navigate('/dang-nhap')
        },
        (error) => {
          alert(error.toString());
        }
      )
    }

    const passwordFormik = useFormik({
      validateOnChange: true,
      validateOnBlur: true,
      validateOnMount: false,
      initialValues: {
        password: "",
        repassword: "",
      },
      validationSchema: Yup.object({
        password: Yup.string()
          .required("Vui lòng nhập mật khẩu")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Mật khẩu tối thiểu 8 kí tự, bao gồm chữ cái và chữ số"
          ),
        repassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
      }),
      onSubmit: (values) => {
        VerifyResetPasswordOnClick(values.password)
      },
    });

    return (
      <div className="sign-up-form-modal">
        <form onSubmit={passwordFormik.handleSubmit}>
          <div onClick={backButtonOnClick} className="back-btn">
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
                id="password"
                label="Mật khẩu mới"
                type="password"
                variant="outlined"
                value={passwordFormik.values.password}
                onChange={passwordFormik.handleChange}
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    paddingLeft: "18px",
                    fontSize: "1.5rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "'Montserrat', san-serif",
                    borderColor: "white",
                    borderColor: "black",
                    fontSize: "1.4rem",
                  },
                }}
              />
              {passwordFormik.errors.password && passwordFormik.touched.password (
                <p className="input-error-validation"> {passwordFormik.errors.password} </p>
              )}

              <TextField
                id="repassword"
                label="Nhập lại mật khẩu"
                type="password"
                variant="outlined"
                value={passwordFormik.values.repassword}
                onChange={passwordFormik.handleChange}
                InputProps={{
                  style: { borderRadius: "30px", paddingLeft: "18px", fontSize: "1.5rem" },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "'Montserrat', san-serif",
                    borderColor: "white",
                    borderColor: "black",
                    fontSize: "1.4rem"
                  },
                }}
              />
              {passwordFormik.errors.repassword && passwordFormik.touched.repassword(
                <p className="input-error-validation"> {passwordFormik.errors.repassword} </p>
              )}

              <button type="submit" className="se-btn login-btn">XÁC NHẬN</button>
            </Stack>
          </Stack>
        </form>
      </div>
    );
  }


  //------------------------------------------------create-verify-code-------------------------//

  function ForgotPasswordModal(props) {

    function sendVerifyCodeOnClick(value) {
      // execute send verify code
      usersServices.sendVerifyCode(value.username).then(
        (data) => {
          alert("Verify code has just sent to email: *******" + data.email.slice(7));
          props.targetEmail.current = data.email;
          props.username.current = value.username;
          setPage(1);
        },
        (error) => {
          alert(error.toString());
        }
      )
    }

    const usernameFormik = useFormik({
      validateOnChange: true,
      validateOnBlur: true,
      validateOnMount: false,
      initialValues: {
        username: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Vui lòng nhập tên đăng nhập").matches(/^[a-zA-Z0-9]+$/, "Tên đăng nhập chỉ chứa chữ cái và chữ số ")
      }),
      onSubmit: (values) => {
        console.log(values)
        sendVerifyCodeOnClick(values);
      },
    });

    return (
      <div className="sign-up-form-modal">
        <form onSubmit={usernameFormik.handleSubmit}>
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
            <p>Nhập username tài khoản của bạn</p>

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
                id="username"
                label="Username "
                type="username"
                variant="outlined"

                value={usernameFormik.values.username}
                onChange={usernameFormik.handleChange}
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    paddingLeft: "18px",
                    fontSize: "1.5rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "'Montserrat', san-serif",
                    fontSize: "1.4rem",
                    borderColor: "white",
                    borderColor: "black",
                  },
                }}
              />
              {usernameFormik.errors.username && (
                <p className="input-error-validation"> {usernameFormik.errors.username} </p>
              )}

              <button type="submit" className="se-btn login-btn">
                Gửi
              </button>
            </Stack>
            <p style={{marginBottom: "1rem"}}>
              <Link to="/dang-nhap">
                <strong> Đăng Nhập</strong>
              </Link>
            </p>

            <p>
              Chưa có tài khoản?
              <Link to="/dang-ky">
                <strong> Đăng Ký</strong>
              </Link>
            </p>
          </Stack>
        </form>
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
          {currentPage == 0 && <ForgotPasswordModal targetEmail={targetEmail} username={username} />}
          {currentPage == 1 && <VerifyAuthCode username={username} targetEmail={targetEmail} verifyCode={verifyCode} />}
          {currentPage == 2 && <ResetPassword username={username} verifyCode={verifyCode} />}
        </Stack>

      </div>
    </>
  );
};

export default ForgotPassword;
