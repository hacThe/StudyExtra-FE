import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { userActions } from '../../../actions/user.actions';
const Login = () => {

  const dispatch = useDispatch();
  const authentication = useSelector((state)=> state.authentication)

  function HandleSignInButtonOnClick()
  {
    dispatch(userActions.login())
    console.log(authentication)
  }

  if (authentication.isLoggedIn)
  return <Navigate to='/trang-chu'/>


  return (
    <>
    <div className="">
      <h1>This is login page</h1>
      <button onClick={()=>{
        HandleSignInButtonOnClick()
      }}>Sign in</button>
    </div>
    </>
  )
}

export default Login
