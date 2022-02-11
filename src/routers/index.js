import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";
import React from "react";
import { useSelector } from "react-redux";

const loading = (
  <div>
    <h1>Loading...</h1>
  </div>
)


// Containers
const TheContent = React.lazy(() => import('../views/layout-components/TheContent'));

// Pages
const Login = React.lazy(() => import('../views/pages/login/Login'));
const SignUp = React.lazy(() => import('../views/pages/sign-up/SignUp'));
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'));



const Routers = () => {
  const authentication = useSelector((state) => state.authentication)
  return (
    // <React.Suspense fallback={loading}>
    <React.Suspense fallback={loading}>
      <Routes>
        <Route path="/login" name="Đăng nhập" element={<Login />} />
        <Route path="/register" name="Đăng ký" element={<SignUp />} />
        <Route path="/404" name="Page 404" element={<Page404 />} />
        <Route path="/" name="Trang chủ" element={<TheContent />}>
          <Route index name="Trang chủ" element={<Navigate to='trang-chu'/>}/>

          {!authentication.isLoggedIn && (
            routes.publicRoute.map((route, idx) => {
              return route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={route.element} />
              )
            })
          )}



          {authentication.isLoggedIn && (
            routes.protectedRoute.map((route, idx) => {
              return route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={route.element} />
              )
            })
          )}
        </Route>

          <Route path="*" element={<Navigate to={authentication.isLoggedIn ? "/trang-chu" : "/login"} />}/>
          {/* <Route path="*" element={<Navigate to="404" />}/> */}

        {/* <AuthGuard path="/" name="Trang chủ">
         <TheLayout></TheLayout>
        </AuthGuard> */}
      </Routes>
    </React.Suspense>
  )
}

export default Routers
