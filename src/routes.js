import React from "react";

const Homepage = React.lazy(() => import("./views/pages/home/Home"));
const Products = React.lazy(() => import("./views/pages/products/Products"));
const CourseDetail = React.lazy(() =>
  import("./views/pages/course/courseDetail/CourseDetail")
);
const UserProfile = React.lazy(() => import("./views/pages/profile/Profile"));
const Ranking = React.lazy(() => import("./views/pages/ranking/Ranking"));
const Document = React.lazy(() => import("./views/pages/document/Document"));
const Courses = React.lazy(() => import("./views/pages/courses/Courses"));
const Question = React.lazy(() => import("./views/pages/question/Question"));
const Lesson = React.lazy(() => import("./views/pages/lesson/Lesson"));
const Overall = React.lazy(() => import("./views/pages/overall/Overall"));
const Search = React.lazy(() => import("./views/pages/search/Search"));
const Socket = React.lazy(() => import("./views/pages/search/TestSocker"));
const CourseListManager = React.lazy(() =>
  import("./views/pages/manager/course/CourseListManager/CourseListManager")
);
const CourseDetailManager = React.lazy(() =>
  import("./views/pages/manager/course/CourseDetailManager/CourseDetailManager")
);
const AddCourse = React.lazy(() =>
  import("./views/pages/manager/course/AddCourse/AddCourse")
);
const EditCourse = React.lazy(() =>
  import("./views/pages/manager/course/EditCourse/EditCourse")
);

const EditCourseChapter = React.lazy(() =>
  import("./views/pages/manager/course/EditCourseChapters/EditCourseChapters")
);
const EditLesson = React.lazy(()=>
  import("./views/pages/manager/course/EditLesson/EditLesson")
)
const AddLesson = React.lazy(()=>
  import("./views/pages/manager/course/AddLesson/AddLesson")
)



const Dashboard = React.lazy(() =>
  import("./views/pages/manager/dashboard/Dashboard")
);

const ExamListManager = React.lazy(() =>
  import("./views/pages/manager/exam/ExamListManager/ExamListManager")
);
const AddExam = React.lazy(() =>
  import("./views/pages/manager/exam/AddExam/AddExam")
);
const EditExam = React.lazy(() =>
  import("./views/pages/manager/exam/EditExam/EditExam")
);

const AddQuestion = React.lazy(() =>
  import("./views/pages/manager/exam/AddQuestion/AddQuestion")
);
const EditQuestion = React.lazy(() =>
  import("./views/pages/manager/exam/EditQuestion/EditQuestion")
);
const Exams = React.lazy(() => import("./views/pages/exam/exams/Exams"));
const ExamDescription = React.lazy(() =>
  import("./views/pages/exam/examDescription/ExamDescription")
);
const ExamDetail = React.lazy(() =>
  import("./views/pages/exam/examDetail/ExamDetail")
);
const ExamResult = React.lazy(() =>
  import("./views/pages/exam/examDetail/ExamResult")
);

// Những route chỉ truy xuất khi chưa đăng nhập
const publicRoute = [
  // {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},
  // {path: '/trang-chu', name: 'Trang chủ', element: <Homepage/>},
  // {path: '/san-pham', name: 'Sản phẩm', element: <Products/>},
  // {path: '/tai-khoan', protected: true, name: 'tài khoản', element: <h1>This is account page</h1>},
  // {path: '/fake', protected: true, name: 'tài khoản'},
];

// route dùng cho mọi trường hợp
const commonRoute = [
  { path: "/trang-chu", name: "Trang chủ", element: <Homepage /> },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "Chi tiết khóa học",
    element: <CourseDetail />,
  },
  { path: "/xep-hang", name: "Xếp hạng", element: <Ranking /> },
  { path: "/tai-lieu", name: "Tài liệu", element: <Document /> },
  { path: "/khoa-hoc", name: "Trang chủ", element: <Courses /> },
  { path: "/luyen-de", name: "Luyện đề", element: <Exams /> },
  {
    path: "/luyen-de/:id",
    name: "Nội dung đề thi",
    element: <ExamDescription />,
  },
  { path: "/luyen-de/id:id/vao-thi", name: "Bài làm", element: <ExamDetail /> },
  {
    path: "/luyen-de/id:id/ket-qua",
    name: "Kết quả thi",
    element: <ExamResult />,
  },
  { path: "/trang-chu", name: "Trang chủ", element: <Homepage /> },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "Chi tiết khóa học",
    element: <CourseDetail />,
  },
  { path: "/xep-hang", name: "Xếp hạng", element: <Ranking /> },
  { path: "/tai-lieu", name: "Tài liệu", element: <Document /> },
  { path: "/khoa-hoc", name: "Trang chủ", element: <Courses /> },
  { path: "/hoi-dap", name: "Hỏi đáp", element: <Question /> },
  { path: "/bai-hoc/:id", name: "Bài học", element: <Lesson /> },
  { path: "/tim-kiem", name: "Tìm kiếm", element: <Search /> },
  { path: "/test-socket", name: "Tìm kiếm", element: <Socket /> },
  // temporary path
  { path: "/thu-nghiem", name: "Thử nghiệm", element: <Overall /> },
];

// rout khi đã đăng nhập
const protectedRoute = [
  { path: "/dat-lai-mat-khau", name: "Trang chủ", element: <Homepage /> },
  {
    path: "/thong-tin-tai-khoan",
    name: "Thông tin tài khoản",
    element: <UserProfile />,
  },
];

const managerRoute = [
  { path: "/quan-ly/dashboard", name: "Trang chủ", element: <Dashboard /> },
  {
    path: "/quan-ly/khoa-hoc",
    name: "Trang chủ",
    element: <CourseListManager />,
  },
  {
    path: "/quan-ly/khoa-hoc/:id",
    name: "Trang chủ",
    element: <CourseDetailManager />,
  },
  {
    path: "/quan-ly/khoa-hoc/chinh-sua/:id",
    name: "Trang chủ",
    element: <EditCourse />,
  },

  {
    path: "/quan-ly/khoa-hoc/chinh-sua-noi-dung/:id",
    name: "Trang chủ",
    element: <EditCourseChapter />,
  },


  
  {
    path: "/quan-ly/khoa-hoc/tao-moi",
    name: "Trang chủ",
    element: <AddCourse />,
  },
  {
    path: "/quan-ly/khoa-hoc/bai-hoc/tao-moi",
    name: "Trang chủ",
    element: <AddLesson />,
  },
  {
    path: "/quan-ly/khoa-hoc/bai-hoc/chinh-sua/:id",
    name: "Trang chủ",
    element: <EditLesson />,
  },
  {
    path: "/quan-ly/nguoi-dung",
    name: "Trang chủ",
    element: <h1>Quan ly nguoi dung</h1>,
  },
  {
    path: "/quan-ly/tai-lieu",
    name: "Trang chủ",
    element: <h1>Quan ly tai lieu</h1>,
  },
  {
    path: "/quan-ly/thi-thu",
    name: "Trang chủ",
    element: (
      <h1>
        <ExamListManager />
      </h1>
    ),
  },
  { path: "/quan-ly/thi-thu/tao-moi", name: "Trang chủ", element: <AddExam /> },
  {
    path: "/quan-ly/thi-thu/chinh-sua/:id",
    name: "Trang chủ",
    element: <EditExam />,
  },
  {
    path: "/quan-ly/thi-thu/cau-hoi/chinh-sua/:id",
    name: "Trang chủ",
    element: <EditQuestion />,
  },
  {
    path: "/quan-ly/thi-thu/cau-hoi/tao-moi",
    name: "Trang chủ",
    element: <AddQuestion />,
  },
];

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute,
  managerRoute,
};

export default routes;
