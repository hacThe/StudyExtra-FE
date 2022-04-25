import React from 'react';

const Homepage = React.lazy(() => import('./views/pages/home/Home'));
const Products = React.lazy(() => import('./views/pages/products/Products'))
const CourseDetail = React.lazy(() => import('./views/pages/course/courseDetail/CourseDetail'))
const UserProfile = React.lazy(() => import("./views/pages/profile/Profile"));
const Ranking = React.lazy(() => import('./views/pages/ranking/Ranking'))
const Document = React.lazy(() => import('./views/pages/document/Document'))
const Courses = React.lazy(() => import('./views/pages/courses/Courses'));
const Search = React.lazy(() => import('./views/pages/search/Search'));
const Socket = React.lazy(() => import('./views/pages/search/TestSocker'));
const Announcement = React.lazy(() => import('./views/pages/announcement/Announcement'))
const GenarelAnnouncement = React.lazy(() => import('./views/pages/announcement/GenarelAnnouncement'))

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
  { path: '/trang-chu', name: 'Trang chủ', element: <Homepage /> },
  { path: '/chi-tiet-khoa-hoc/:id', name: 'Chi tiết khóa học', element: <CourseDetail /> },
  { path: '/xep-hang', name: 'Xếp hạng', element: <Ranking /> },
  { path: '/tai-lieu', name: 'Tài liệu', element: <Document /> },
  { path: '/khoa-hoc', name: 'Trang chủ', element: <Courses /> },
  { path: '/tim-kiem', name: 'Tìm kiếm', element: <Search /> },
  { path: '/test-socket', name: 'Tìm kiếm', element: <Socket /> },
  { path: '/announcement/:slug', name: 'Thông báo', element: <Announcement /> },
  { path: '/announcement', name: 'Thông báo', element: <GenarelAnnouncement /> },
]


// rout khi đã đăng nhập 
const protectedRoute = [
  { path: '/dat-lai-mat-khau', name: 'Trang chủ', element: <Homepage /> },
  { path: '/thong-tin-tai-khoan', name: 'Thông tin tài khoản', element: <UserProfile /> },

]

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute
}

export default routes;
