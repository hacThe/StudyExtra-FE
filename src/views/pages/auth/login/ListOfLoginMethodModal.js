import React from "react";
import { Stack } from "@mui/material";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

function ListOfLoginMethodModal(props) {
  const navigate = useNavigate();
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
        <div className="app-logo" onClick={()=>navigate('/trang-chu')}><AiOutlineHome /></div>
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
            onClick={props.GoToLoginWithUsernameAndPasswordScreen}
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

export default ListOfLoginMethodModal;
