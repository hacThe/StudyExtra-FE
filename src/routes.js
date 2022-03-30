import React from 'react';


const Homepage = React.lazy(() => import('./views/pages/home/Home'));
const Products = React.lazy(()=> import('./views/pages/products/Products'));
const CourseDetail = React.lazy(()=> import ('./views/pages/course/courseDetail/CourseDetail'));
const UserProfile = React.lazy(() => import("./views/pages/profile/Profile"));
const Ranking = React.lazy(() => import('./views/pages/ranking/Ranking'));
const Document = React.lazy(() => import('./views/pages/document/Document'));
const Courses = React.lazy(() => import('./views/pages/courses/Courses'));
const Exams = React.lazy(() => import('./views/pages/exam/exams/Exams'));
const ExamDescription = React.lazy(() => import('./views/pages/exam/examDescription/ExamDescription'));
const ExamDetail = React.lazy(() => import('./views/pages/exam/examDetail/ExamDetail'));




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
  {path: '/luyen-de', name: 'Luyện đề', element: <Exams/>},
  {path: '/luyen-de/id:id', name: 'Nội dung đề thi', element: <ExamDescription/>},
  {path: '/luyen-de/id:id/cau:cau', name: 'Bài làm', element: <ExamDetail/>}
]



// rout khi đã đăng nhập 
const protectedRoute = [
  {path: '/dat-lai-mat-khau', name: 'Trang chủ', element: <Homepage/>},
  {path: '/thong-tin-tai-khoan', name: 'Thông tin tài khoản', element: <UserProfile/>},

]

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute
}

export default routes;
