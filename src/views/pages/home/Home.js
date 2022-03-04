import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
import { useNavigate } from "react-router-dom";
const Login = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  function HandleLogOutOnClick(){
    navigate('/dang-nhap');
    dispatch(userActions.logout())
  }


  return (
    <>
      <div className="">
        <h1>This is home page</h1>
      </div>

      <button onClick={()=>{HandleLogOutOnClick()}}>Đăng xuất</button>
    </>
  );
};

export default Login;
