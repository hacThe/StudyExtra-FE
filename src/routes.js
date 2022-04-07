import React from 'react';


const Homepage = React.lazy(() => import('./views/pages/home/Home'));
const Products = React.lazy(()=> import('./views/pages/products/Products'))
const CourseDetail = React.lazy(()=> import ('./views/pages/course/courseDetail/CourseDetail'))
const UserProfile = React.lazy(() => import("./views/pages/profile/Profile"));
const Ranking = React.lazy(() => import('./views/pages/ranking/Ranking'))
const Document = React.lazy(() => import('./views/pages/document/Document'))
const Courses = React.lazy(() => import('./views/pages/courses/Courses'));
const CourseListManager = React.lazy(()=> import('./views/pages/manager/course/CourseListManager/CourseListManager'))
const CourseDetailManager = React.lazy(()=> import('./views/pages/manager/course/CourseDetailManager/CourseDetailManager'))
const EditCourse = React.lazy(()=>import("./views/pages/manager/course/EditCourse/EditCourse"))
const Dashboard = React.lazy(() => import('./views/pages/manager/dashboard/Dashboard'))
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
  {path: '/xep-hang', name: 'Xếp hạng', element: <Ranking/>},
  {path: '/tai-lieu', name: 'Tài liệu', element: <Document/>}, 
  {path: '/khoa-hoc', name: 'Trang chủ', element: <Courses/>},
  
]



// rout khi đã đăng nhập 
const protectedRoute = [
  {path: '/dat-lai-mat-khau', name: 'Trang chủ', element: <Homepage/>},
  {path: '/thong-tin-tai-khoan', name: 'Thông tin tài khoản', element: <UserProfile/>},
  
]

const managerRoute = [
  {path: '/quan-ly/dashboard', name: 'Trang chủ', element:<Dashboard />},
  {path: '/quan-ly/khoa-hoc', name: 'Trang chủ', element:<CourseListManager/>},
  {path: '/quan-ly/khoa-hoc/:id', name: 'Trang chủ', element:<CourseDetailManager/>},
  {path: '/quan-ly/khoa-hoc/:id/edit', name: 'Trang chủ', element:<EditCourse/>},
  {path: '/quan-ly/nguoi-dung', name: 'Trang chủ', element:<h1>Quan ly nguoi dung</h1>},
  {path: '/quan-ly/tai-lieu', name: 'Trang chủ', element:<h1>Quan ly tai lieu</h1>},
  {path: '/quan-ly/thi-thu', name: 'Trang chủ', element:<h1>Quan ly thi thu</h1>},
]

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute,
  managerRoute
}

export default routes;
