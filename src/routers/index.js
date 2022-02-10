 import {Route, Routes} from "react-router-dom";
import {AuthGuard} from "../auth/AuthGuard";
import React from "react";

const loading = (
  <div>
    <h1>Loading...</h1>
  </div>
)


// Containers
const TheLayout = React.lazy(() => import('../views/layout-components/TheLayout'));
const TheContent = React.lazy(() => import('../views/layout-components/TheContent'));

// Pages
const Login = React.lazy(() => import('../views/pages/login/Login'));
const SignUp = React.lazy(() => import('../views/pages/sign-up/SignUp'));
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'));



const Routers = () => (
  // <React.Suspense fallback={loading}>
   <React.Suspense fallback={loading}>
    <Routes>
      <Route path="/login" name="Đăng nhập" element={<Login/>}/>
      <Route path="/register" name="Đăng ký" element={<SignUp/>}/>
      <Route path="/404" name="Page 404" element={<Page404 />}/>
      
      <Route path="*" name="Trang chủ" element={<TheContent />}/>

      
      {/* <AuthGuard path="/" name="Trang chủ">
       <TheLayout></TheLayout>
      </AuthGuard> */}
    </Routes>
  </React.Suspense>
)

export default Routers
