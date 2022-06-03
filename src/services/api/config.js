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
  URL_GET_LESSON: URL_SYSTEM_V1 + "/courses/lesson",
  URL_ADD_LESSON: URL_SYSTEM_V1 + "/courses/addNewLesson",
  URL_EDIT_LESSON: URL_SYSTEM_V1 + "/courses/lesson",
  URL_DELETE_LESSON: URL_SYSTEM_V1 + "/courses/lesson/delete",
  URL_BUY_COURSE: URL_SYSTEM_V1 + "/profiles/userBuyCourse",
  URL_GET_COURSE_STUDENT: URL_SYSTEM_V1 + "/courses/students",

  // exam
  URL_GET_EXAM: URL_SYSTEM_V1 + "/exam/getExam/",
  URL_GET_TOP_RESULT: URL_SYSTEM_V1 + "/exam/getTopResult/",
  URL_POST_RESULT_EXAM: URL_SYSTEM_V1 + "/exam/postResultExam",
  URL_GET_RESULT_EXAM: URL_SYSTEM_V1 + "/exam/getResultExam/",
  URL_ADD_NEW_EXAM: URL_SYSTEM_V1 + "/exam/addNewExam",
  URL_GET_ALL_TEST_EXAM: URL_SYSTEM_V1 + "/exam/getAllTestExam",
  URL_EDIT_TEST_EXAM: URL_SYSTEM_V1 + "/exam/edit/",
  URL_SAVE_TEST_EXAM: URL_SYSTEM_V1 + "/exam/save-test-exam",
  URL_DELETE_TEST_EXAM: URL_SYSTEM_V1 + "/exam/delete-test-exam",
  URL_CHECK_EXAM_REQUIREMENT: URL_SYSTEM_V1 + "/exam/checkExamRequirement",

  //account
  URL_GET_USER_COURSES: URL_SYSTEM_V1 + "/profiles/getUserCourses",
  URL_GET_USER_NOTIFICATIONS:
    URL_SYSTEM_V1 + "/notification/getUserNotification",
  URL_UPLOAD_AVATAR: URL_SYSTEM_V1 + "/profiles/uploadAvatar",

  // document
  URL_GET_DOCUMENTS: URL_SYSTEM_V1 + "/document/",
  // article
  URL_ARTICLE: URL_SYSTEM_V1 + "/article/",
  // type category
  URL_TYPE_CATEGORY: URL_SYSTEM_V1 + "/type-category/",
  // article picture
  URL_ARTICLE_PICTURE:
    "https://api.cloudinary.com/v1_1/phiroud321/image/upload",

  URL_GET_POSTS: URL_SYSTEM_V1 + "/posts/getAllPosts",
  URL_GET_NOTIFICATIONS: URL_SYSTEM_V1 + "/notifications/getAllNotification",

  // Announcement
  URL_ADD_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/add-new-announcement",
  URL_GET_ALL_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/getAllAnnouncement",
  URL_GET_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/", //+ slug
  URL_DELETE_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/delete-announcement",
  URL_UPDATE_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/update-announcement",

  URL_USERS: URL_SYSTEM_V1 + "/users",
  URL_USER_TOOGLE_BLOCK: URL_SYSTEM_V1 + "/users/lock",
  URL_VERIFY_EMAIL: URL_SYSTEM_V1 + "/auth/",
  URL_VERIFY_SEND_VERIFY_CODE: URL_SYSTEM_V1 + "/auth/sendVerifyCode",
  URL_VERIFY_CODE: URL_SYSTEM_V1 + "/auth/verifyCode",
  URL_SET_NEW_PASSWORD: URL_SYSTEM_V1 + "/auth/setNewPassword",
  URL_UPDATE_PROFILE: URL_SYSTEM_V1 + "/profiles/updateProfile",
  URL_UPDATE_GEM: URL_SYSTEM_V1 + "/profiles/updateGem",
  URL_DEPOSIT_REQUEST: URL_SYSTEM_V1 + "/transaction/createDepositRequest",
  URL_GET_USER_TRANSACTION: URL_SYSTEM_V1 + "/transaction/getUserTransaction",
  URL_RESET_PASSWORD: URL_SYSTEM_V1 + "/auth/resetPassword",
  URL_RESEND_VERIFYEMAIL: URL_SYSTEM_V1 + "/auth/resendVerifyEmail",

  // Announcement
  URL_ADD_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/add-new-announcement",
  URL_GET_ALL_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/getAllAnnouncement",
  URL_GET_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/", //+ slug
  URL_DELETE_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/delete-announcement",
  URL_UPDATE_ANNOUNCEMENT: URL_SYSTEM_V1 + "/announcement/update-announcement",
  // transaction
  URL_GET_WAITING_TRANSACTIONS:
    URL_SYSTEM_V1 + "/transaction/getDepositeGemRequest",
  URL_DELETE_TRANSACTION: URL_SYSTEM_V1 + "/transaction/delete",
  URL_CONFIRM_TRANSACTION: URL_SYSTEM_V1 + "/transaction/confirm",


  // Ranking
  URL_GET_RANKING: URL_SYSTEM_V1 + "/courses/ranking",

  // Get listUser
  URL_GET_LIST_USER: URL_SYSTEM_V1 + "/courses/getListUser",


  // Get transactions
  URL_GET_TRANSACTIONS: URL_SYSTEM_V1 + "/transaction/getAllTransaction",
};
