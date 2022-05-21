import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../../../../actions/user.actions";
import { usersServices } from "../../../../services/users.services";
import { cookiesUtil } from "../../../../utilities";
import { TextField, Box, Grid, Stack, Button } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./SignUp.scss";
import { maxWidth } from "@mui/system";
import SignUpForm from "./SignUpForm";
import { values } from "lodash";
// import Container from '@mui/material/Container';
const SignUp = () => {
  const navigate = useNavigate();

  function goBackBtnOnClick() {
    navigate(-1);
  }
  const dispatch = useDispatch();

  function SignUpOnClick(value) {
    // execute sign up.
   usersServices.register(value).then(
    () => {
      alert("register successfully");
      navigate("/dang-nhap");
    },
    (error) => {
      alert(error.toString());
    }
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
          <div className="sign-up-form-modal">
            {/* <div onClick={goBackBtnOnClick} className="back-btn">
          <BsFillReplyFill/>
        </div> */}
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
              <h1 className="modal-title">ĐĂNG KÝ TÀI KHOẢN</h1>

              <Stack
                sx={{
                  width: "80%",
                  maxWidth: "500px",
                }}
                spacing={2}
                direction="column"
                margin="24px"
              >
                <SignUpForm onSubmit={SignUpOnClick} />
              </Stack>

              <p>
                Đã có tài khoản?
                <Link to="/dang-nhap">
                  <strong>Đăng nhập</strong>
                </Link>
              </p>
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default SignUp;
