import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
const Login = () => {


  const dispatch = useDispatch();

  function HandleLogOutOnClick(){
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
