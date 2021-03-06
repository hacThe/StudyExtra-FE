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
const EditLesson = React.lazy(() =>
  import("./views/pages/manager/course/EditLesson/EditLesson")
);
const AddLesson = React.lazy(() =>
  import("./views/pages/manager/course/AddLesson/AddLesson")
);

const ManageAnnouncement = React.lazy(() =>
  import("./views/pages/manager/announcement/ManageAnnouncement")
);
const AddAnnouncement = React.lazy(() =>
  import('./views/pages/manager/announcement/components/AddAnnouncement.js')
)
const EditAnnouncement = React.lazy(() =>
  import('./views/pages/manager/announcement/components/EditAnnouncement')
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
const UserManager = React.lazy(() =>
  import("./views/pages/manager/user/ManagerUser")
);
const DetailUser = React.lazy(() =>
  import("./views/pages/manager/user/DetailUser")
);

const DepositeGemRequest = React.lazy(() =>
  import("./views/pages/manager/user/DepositeGemRequests")
);
const Exams = React.lazy(() => import("./views/pages/exam/exams/Exams"));
const ExamDescription = React.lazy(() =>
  import("./views/pages/exam/examDescription/ExamDescription")
);
const ExamDetail = React.lazy(() =>
  import("./views/pages/exam/examDetail/ExamDetail")
);
const ExamResult = React.lazy(() =>
  import("./views/pages/exam/examResult/ExamResult")
);

const DocumentManage = React.lazy(() =>
  import("./views/pages/manager/document/Document")
);

const AddDocument = React.lazy(() =>
  import("./views/pages/manager/document/AddDocument")
);

const ModifyDocument = React.lazy(() =>
  import("./views/pages/manager/document/ModifyDocument")
);

const Announcement = React.lazy(() =>
  import("./views/pages/announcement/Announcement")
);
const GenarelAnnouncement = React.lazy(() =>
  import("./views/pages/announcement/GenarelAnnouncement")
);
const ConcretePost = React.lazy(() => import("./views/pages/question/ConcretePost"));
const ConcreteDocument = React.lazy(() => import("./views/pages/document/ConcreteDocument"));

// Nh???ng route ch??? truy xu???t khi ch??a ????ng nh???p
const publicRoute = [
  // {path: '/trang-chu', name: 'Trang ch???', element: <Homepage/>},
  // {path: '/trang-chu', name: 'Trang ch???', element: <Homepage/>},
  // {path: '/san-pham', name: 'S???n ph???m', element: <Products/>},
  // {path: '/tai-khoan', protected: true, name: 't??i kho???n', element: <h1>This is account page</h1>},
  // {path: '/fake', protected: true, name: 't??i kho???n'},
];

// route d??ng cho m???i tr?????ng h???p
const commonRoute = [
  { path: "/trang-chu", name: "Trang ch???", element: <Homepage /> },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "Chi ti???t kh??a h???c",
    element: <CourseDetail />,
  },
  { path: "/xep-hang", name: "X???p h???ng", element: <Ranking /> },
  { path: "/tai-lieu", name: "T??i li???u", element: <Document /> },
  { path: "/khoa-hoc", name: "Trang ch???", element: <Courses /> },
  { path: "/luyen-de", name: "Luy???n ?????", element: <Exams /> },
  {
    path: "/luyen-de/:id",
    name: "N???i dung ????? thi",
    element: <ExamDescription />,
  },

  { path: "/trang-chu", name: "Trang ch???", element: <Homepage /> },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "Chi ti???t kh??a h???c",
    element: <CourseDetail />,
  },
  { path: "/xep-hang", name: "X???p h???ng", element: <Ranking /> },
  { path: "/tai-lieu", name: "T??i li???u", element: <Document /> },
  { path: "/tai-lieu/:id", name: "T??i li???u", element: <ConcreteDocument /> },
  { path: "/khoa-hoc", name: "Trang ch???", element: <Courses /> },
  { path: "/hoi-dap/:id", name: "H???i ????p", element: <ConcretePost /> },
  { path: "/hoi-dap", name: "H???i ????p", element: <Question /> },
  { path: "/bai-hoc/:id", name: "B??i h???c", element: <Lesson /> },
  { path: "/tim-kiem", name: "T??m ki???m", element: <Search /> },
  { path: "/test-socket", name: "T??m ki???m", element: <Socket /> },
  // temporary path
  { path: "/thu-nghiem", name: "Th??? nghi???m", element: <Overall /> },
  { path: "/thong-bao/:slug", name: "Th??ng b??o", element: <Announcement /> },
  {
    path: "/thong-bao",
    name: "Th??ng b??o",
    element: <GenarelAnnouncement />,
  },
];

// rout khi ???? ????ng nh???p
const protectedRoute = [
  { path: "/dat-lai-mat-khau", name: "Trang ch???", element: <Homepage /> },
  { path: "/luyen-de/:id/vao-thi", name: "B??i l??m", element: <ExamDetail /> },
  {
    path: "/luyen-de/:id/ket-qua",
    name: "K???t qu??? thi",
    element: <ExamResult />,
  },
  {
    path: "/thong-tin-tai-khoan",
    name: "Th??ng tin t??i kho???n",
    element: <UserProfile />,
  },
];

const managerRoute = [
  { path: "/quan-ly/dashboard", name: "Trang ch???", element: <Dashboard /> },
  {
    path: "/quan-ly/khoa-hoc",
    name: "Trang ch???",
    element: <CourseListManager />,
  },
  {
    path: "/quan-ly/khoa-hoc/:id",
    name: "Trang ch???",
    element: <CourseDetailManager />,
  },
  {
    path: "/quan-ly/khoa-hoc/chinh-sua/:id",
    name: "Trang ch???",
    element: <EditCourse />,
  },

  {
    path: "/quan-ly/khoa-hoc/chinh-sua-noi-dung/:id",
    name: "Trang ch???",
    element: <EditCourseChapter />,
  },

  {
    path: "/quan-ly/khoa-hoc/tao-moi",
    name: "Trang ch???",
    element: <AddCourse />,
  },
  {
    path: "/quan-ly/khoa-hoc/bai-hoc/tao-moi",
    name: "Trang ch???",
    element: <AddLesson />,
  },
  {
    path: "/quan-ly/khoa-hoc/bai-hoc/chinh-sua/:id",
    name: "Trang ch???",
    element: <EditLesson />,
  },
  {
    path: "/quan-ly/nguoi-dung",
    name: "Trang ch???",
    element: <UserManager />,
  },

  {
    path: "/quan-ly/nguoi-dung/yeu-cau-nap-gem",
    name: "Y??u c???u n???p GEM",
    element: <DepositeGemRequest />,
  },
  {
    path: "/quan-ly/nguoi-dung/:id",
    name: "Chi tiet nguoi dung",
    element: <DetailUser />,
  },

  {
    path: "/quan-ly/tai-lieu",
    name: "Qu???n l?? t??i li???u",
    element: <DocumentManage />,
  },
  {
    path: "/quan-ly/tai-lieu/them",
    name: "Qu???n l?? t??i li???u",
    element: <AddDocument />,
  },
  {
    path: "/quan-ly/tai-lieu/chinh-sua/:id",
    name: "Ch???nh s???a t??i li???u",
    element: <ModifyDocument/>,
  },
  {
    path: "/quan-ly/tai-lieu",
    name: "Trang ch???",
    element: <DocumentManage />,
  },
  {
    path: "/quan-ly/thi-thu",
    name: "Trang ch???",
    element: (
      <h1>
        <ExamListManager />
      </h1>
    ),
  },
  { path: "/quan-ly/thi-thu/tao-moi", name: "Trang ch???", element: <AddExam /> },
  {
    path: "/quan-ly/thi-thu/chinh-sua/:id",
    name: "Trang ch???",
    element: <EditExam />,
  },
  {
    path: "/quan-ly/thi-thu/cau-hoi/chinh-sua/:id",
    name: "Trang ch???",
    element: <EditQuestion />,
  },
  {
    path: "/quan-ly/thi-thu/cau-hoi/tao-moi",
    name: "Trang ch???",
    element: <AddQuestion />,
  },
  {
    path: "/quan-ly/thong-bao-chung/tao-moi",
    name: "Trang ch???",
    element: <AddAnnouncement />,
  },
  {
    path: "/quan-ly/thong-bao-chung",
    name: "Trang ch???",
    element: <ManageAnnouncement />,
  },
  {
    path: "/quan-ly/thong-bao-chung/chinh-sua/:slug",
    name: 'Trang ch???',
    element: <EditAnnouncement />
  }
];

const routes = {
  publicRoute,
  protectedRoute,
  commonRoute,
  managerRoute,
};

export default routes;
