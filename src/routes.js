import React from 'react';


const Homepage = React.lazy(() => import('./views/pages/home/Home'));
const Products = React.lazy(()=> import('./views/pages/products/Products'))
const Courses = React.lazy(() => import('./views/pages/coursesList/Courses'));


const publicRoute = [

  // {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},
  // {path: '/san-pham', name: 'Sản phẩm', element: <Products/>},
  // {path: '/tai-khoan', protected: true, name: 'tài khoản', element: <h1>This is account page</h1>},
  // {path: '/fake', protected: true, name: 'tài khoản'},
]


const commonRoute = [
  {path: '/khoa-hoc', name: 'Trang chủ', element: <Courses/>},
  
]


const protectedRoute = [
  {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},
  {path: '/ahihi', name: 'Sản phẩm', element: <Products/>},
]

const routes = {
  publicRoute,
  protectedRoute
}

export default routes;
