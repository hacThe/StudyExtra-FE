import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usersServices } from "../../../../services";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Stack } from "@mui/material";
import { BsFillReplyFill } from "react-icons/bs";
import "./ForgotPassword.scss";
import { showToast } from "../../../../actions/toast.action";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  // 0: ForgotPasswordModal, 1
  const [currentPage, setPage] = useState(0);
  const username = useRef();
  const verifyCode = useRef();
  const targetEmail = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function backButtonOnClick() {
    setPage(currentPage - 1);
  }

  //------------------------------------------------------verify code-----------------------------------//
  function VerifyAuthCode(props) {
    const [inputCode, setInputCode] = useState("");
    function VerifyCodeOnClick() {
      usersServices.verifyCode(props.username.current, inputCode).then(
        (data) => {
          dispatch(showToast("success", data.message));
          props.verifyCode.current = inputCode;
          setPage(2);
        },
        (error) => {
          dispatch(showToast("fail", JSON.stringify(error)));
        }
      );
    }

    function resendCodeOnClick() {
      // execute re-send verify code
      usersServices.sendVerifyCode(props.username.current).then(
        (data) => {
          dispatch(
            showToast(
              "success",
              "Verify code has just sent to email: *******" +
                data.email.slice(7)
            )
          );
          props.targetEmail.current = data.email;
          setPage(1);
        },
        (error) => {
          dispatch(showToast("fail", error.toString()));
        }
      );
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
          <h1 className="modal-title">X??C NH???N M???T M??</h1>
          <p>
            Vui l??ng ki???m tra email ????? nh???n m?? ?????t l???i m???t kh???u g???m 8 ch??? s???.
          </p>
          <p>
            Ch??ng t??i ???? g???i m?? x??c nh???n ?????n email: *******
            {props.targetEmail.current.slice(7)}
          </p>

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
              label="M?? x??c nh???n: XXXXXXXX"
              variant="outlined"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && VerifyCodeOnClick()}
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
              X??C NH???N
            </button>
          </Stack>
          <p
            onClick={resendCodeOnClick}
            style={{ fontSize: "1.4rem", marginBottom: "12px" }}
            className="resend-password"
          >
            G???i l???i m??
          </p>
        </Stack>
      </div>
    );
  }
  //-----------------------------------------ResetPassword--------------------------------------//
  function ResetPassword(props) {
    function VerifyResetPasswordOnClick(password) {
      // execute reset password
      usersServices
        .setNewPassword(
          props.username.current,
          props.verifyCode.current,
          password
        )
        .then(
          (data) => {
            dispatch(showToast("success", "?????t l???i m???t kh???u th??nh c??ng!"));
            console.log(data);
            setTimeout(() => {
              navigate("/dang-nhap");
            }, 1000);
          },
          (error) => {
            dispatch(showToast("fail", error.toString()));
          }
        );
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
          .required("Vui l??ng nh???p m???t kh???u")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "M???t kh???u t???i thi???u 8 k?? t???, bao g???m ch??? c??i v?? ch??? s???"
          ),
        repassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "M???t kh???u kh??ng tr??ng kh???p"),
      }),
      onSubmit: (values) => {
        VerifyResetPasswordOnClick(values.password);
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
            <h1 className="modal-title">?????T L???I M???T KH???U</h1>

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
                label="M???t kh???u m???i"
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
              {passwordFormik.errors.password &&
                passwordFormik.touched.repassword && (
                  <p className="input-error-validation">
                    {" "}
                    {passwordFormik.errors.password}{" "}
                  </p>
                )}

              <TextField
                id="repassword"
                label="Nh???p l???i m???t kh???u"
                type="password"
                variant="outlined"
                value={passwordFormik.values.repassword}
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
              {passwordFormik.errors.repassword &&
                passwordFormik.touched.repassword && (
                  <p className="input-error-validation">
                    {" "}
                    {passwordFormik.errors.repassword}{" "}
                  </p>
                )}

              <button type="submit" className="se-btn login-btn">
                X??C NH???N
              </button>
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
          dispatch(
            showToast(
              "success",
              "Verify code has just sent to email: *******" +
                data.email.slice(7)
            )
          );
          props.targetEmail.current = data.email;
          props.username.current = value.username;
          setPage(1);
        },
        (error) => {
          dispatch(showToast("fail", JSON.stringify(error)));
        }
      );
    }

    const usernameFormik = useFormik({
      validateOnChange: true,
      validateOnBlur: true,
      validateOnMount: false,
      initialValues: {
        username: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .required("Vui l??ng nh???p t??n ????ng nh???p")
          .matches(
            /^[a-zA-Z0-9]+$/,
            "T??n ????ng nh???p ch??? ch???a ch??? c??i v?? ch??? s??? "
          ),
      }),
      onSubmit: (values) => {
        console.log(values);
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
            <h1 className="modal-title">QU??N M???T KH???U</h1>
            <p>Nh???p username t??i kho???n c???a b???n</p>

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
                <p className="input-error-validation">
                  {" "}
                  {usernameFormik.errors.username}{" "}
                </p>
              )}

              <button type="submit" className="se-btn login-btn">
                G???i
              </button>
            </Stack>
            <p style={{ marginBottom: "1rem" }}>
              <Link to="/dang-nhap">
                <strong> ????ng Nh???p</strong>
              </Link>
            </p>

            <p>
              Ch??a c?? t??i kho???n?
              <Link to="/dang-ky">
                <strong> ????ng K??</strong>
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
          {currentPage == 0 && (
            <ForgotPasswordModal
              targetEmail={targetEmail}
              username={username}
            />
          )}
          {currentPage == 1 && (
            <VerifyAuthCode
              username={username}
              targetEmail={targetEmail}
              verifyCode={verifyCode}
            />
          )}
          {currentPage == 2 && (
            <ResetPassword username={username} verifyCode={verifyCode} />
          )}
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
