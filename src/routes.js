import React from 'react';


const Homepage = React.lazy(() => import('./views/pages/home/Home'));
const Products = React.lazy(()=> import('./views/pages/products/Products'))
const CourseDetail = React.lazy(()=> import ("./views/pages/course/courseDetail/CourseDetail"))

// Những route chỉ truy xuất khi chưa đăng nhập
const publicRoute = [
  // {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},


  // {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},
  // {path: '/san-pham', name: 'Sản phẩm', element: <Products/>},
  // {path: '/tai-khoan', protected: true, name: 'tài khoản', element: <h1>This is account page</h1>},
  // {path: '/fake', protected: true, name: 'tài khoản'},
]

// route dùng cho mọi trường hợp
const commonRoute = [
  {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},  
  {path: '/chi-tiet-khoa-hoc/:id', name: 'Chi tiết khóa học', element: <CourseDetail/>},  
]



// rout khi đã đăng nhập 
const protectedRoute = [
  {path: '/dat-lai-mat-khau', name: 'Trang chủ', element: <Homepage/>},

]

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute
}

export default routes;
