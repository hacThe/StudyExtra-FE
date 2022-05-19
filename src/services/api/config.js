// thay đổi api way ở đây nek
const URL_SYSTEM_V1 = "http://localhost:5000/api";
export default {
  URL_LOGIN: URL_SYSTEM_V1 + "/auth/login",
  URL_REGISTER: URL_SYSTEM_V1 + "/auth/register",

  // Course
  URL_GET_COURSES: URL_SYSTEM_V1 + "/courses/getAllCourses",
  URL_GET_COURSE: URL_SYSTEM_V1 + "/courses",
  URL_CREATE_COURSE: URL_SYSTEM_V1 + "/courses/new",
  URL_UPDATE_COURSE: URL_SYSTEM_V1 + "/courses/update",
  URL_DELETE_COURSE: URL_SYSTEM_V1 + "/courses",
  URL_ADD_CHAPTER: URL_SYSTEM_V1 + "/courses/addNewChapter",
  URL_EDIT_CHAPTER: URL_SYSTEM_V1 + "/courses/chapter",
  URL_DELETE_CHAPTER: URL_SYSTEM_V1 + "/courses/chapter/delete",
  URL_ADD_LESSON: URL_SYSTEM_V1 + "/courses/addNewLesson",
  URL_EDIT_LESSON: URL_SYSTEM_V1 + "/courses/lesson",
  URL_DELETE_LESSON: URL_SYSTEM_V1 + "/courses/lesson/delete",

  // exam
  URL_GET_QUESTIONS: URL_SYSTEM_V1 + "/exam/getQuestions",
  URL_POST_RESULT_EXAM: URL_SYSTEM_V1 + "/exam/getResultExam",
  URL_LOGIN: URL_SYSTEM_V1 + "/auth/login",
  URL_REGISTER: URL_SYSTEM_V1 + "/auth/register",
  URL_GET_COURSES: URL_SYSTEM_V1 + "/courses/getAllCourses",
  URL_GET_POSTS: URL_SYSTEM_V1 + "/posts/getAllPosts",

  //account
  URL_GET_USER_COURSES: URL_SYSTEM_V1 + '/profiles/getUserCourses',
  URL_GET_USER_NOTIFICATIONS: URL_SYSTEM_V1 + '/notification/getUserNotification',
  URL_UPLOAD_AVATAR: URL_SYSTEM_V1 + '/profiles/uploadAvatar',
  URL_USERS: URL_SYSTEM_V1 + "/users",
  URL_USER_TOOGLE_BLOCK: URL_SYSTEM_V1 + "/users/lock",
  URL_VERIFY_EMAIL: URL_SYSTEM_V1 + '/auth/',
  URL_VERIFY_SEND_VERIFY_CODE: URL_SYSTEM_V1 + '/auth/sendVerifyCode',
  URL_VERIFY_CODE: URL_SYSTEM_V1 + '/auth/verifyCode',
  URL_SET_NEW_PASSWORD: URL_SYSTEM_V1 + '/auth/setNewPassword',
  URL_UPDATE_PROFILE: URL_SYSTEM_V1 + '/profiles/updateProfile',
  URL_DEPOSIT_REQUEST: URL_SYSTEM_V1 + '/transaction/createDepositRequest',
  URL_GET_USER_TRANSACTION: URL_SYSTEM_V1 + '/transaction/getUserTransaction',
  URL_RESET_PASSWORD: URL_SYSTEM_V1 + '/auth/resetPassword',
  URL_RESEND_VERIFYEMAIL: URL_SYSTEM_V1 + '/auth/resendVerifyEmail',

  // document
  URL_GET_DOCUMENTS: URL_SYSTEM_V1 + "/document/",
  // article
  URL_ARTICLE: URL_SYSTEM_V1 + "/article/",
  // type category
  URL_TYPE_CATEGORY: URL_SYSTEM_V1 + "/type-category/",
  URL_GET_POSTS: URL_SYSTEM_V1 + "/posts/getAllPosts",
  URL_GET_NOTIFICATIONS: URL_SYSTEM_V1 + "/notifications/getAllNotification",

  // transaction
  URL_GET_WAITING_TRANSACTIONS: URL_SYSTEM_V1 + "/transaction/getDepositeGemRequest"
};
