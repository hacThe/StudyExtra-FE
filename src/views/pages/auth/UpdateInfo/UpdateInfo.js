import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { TextField, Box, Grid, Stack, Button, OutlinedInput } from "@mui/material";
import { BsGoogle, BsFacebook, BsFillReplyFill } from "react-icons/bs";
import "./UpdateInfo.scss";
import { maxWidth } from "@mui/system";
// import Container from '@mui/material/Container';






const UpdateInfo = () => {



  
const HorizoltalInput = (props)=>{
  return (
    <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <p style={{ width: "100px", fontWeight: 500, fontSize: "16px" }}>{props.label}</p>
              <TextField
                sx={{
                  flex: "1",
                }}
                id="outlined-basic"
                type={props.type}
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    paddingLeft: "18px",
                    height: "40px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "'Montserrat', san-serif",
                    borderColor: "white",
                    borderColor: "black",
                  },
                }}
              /> 
             
            </Stack>
  )
}



const VerifyEmailWithCode = () =>{
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
    )
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
          <h1 className="modal-title">CẬP NHẬT THÔNG TIN TÀI KHOẢN</h1>

          <Stack
            sx={{
              width: "80%",
              maxWidth: "500px",
            }}
            spacing={2}
            direction="column"
            margin="24px"
          >
            <HorizoltalInput  label="Họ và tên*" required={true} type="text"/>
            <HorizoltalInput  label="Ngày sinh" required={true} type="text"/>
            <HorizoltalInput  label="Email*" required={true} type="text"/>
            <HorizoltalInput  label="SĐT" required={true} type="text"/>



            <div className="se-btn login-btn">LƯU THÔNG TIN</div>
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
          <VerifyEmailWithCode />
        </Stack>
      </div>
    </>
  );
};

export default UpdateInfo;
