// thay đổi api way ở đây nek
const URL_SYSTEM_V1 = 'http://localhost:5000/api';
export default {
  URL_LOGIN: URL_SYSTEM_V1 + '/auth/login',
  URL_REGISTER: URL_SYSTEM_V1 + '/auth/register',
  
  // Course
  URL_GET_COURSES: URL_SYSTEM_V1 + '/courses/getAllCourses',
  URL_GET_COURSE: URL_SYSTEM_V1 + '/courses',
  URL_CREATE_COURSE: URL_SYSTEM_V1 + '/courses/new',
  URL_UPDATE_COURSE: URL_SYSTEM_V1 + '/courses/update',
  URL_DELETE_COURSE: URL_SYSTEM_V1 + '/courses',
  URL_ADD_CHAPTER: URL_SYSTEM_V1 + '/courses/addNewChapter',
  URL_EDIT_CHAPTER: URL_SYSTEM_V1 + '/courses/chapter',


  // exam
  URL_GET_QUESTIONS: URL_SYSTEM_V1 + '/exam/getQuestions',
  URL_POST_RESULT_EXAM: URL_SYSTEM_V1 + '/exam/getResultExam',
  URL_LOGIN: URL_SYSTEM_V1 + '/auth/login',
  URL_REGISTER: URL_SYSTEM_V1 + '/auth/register',
  URL_GET_COURSES: URL_SYSTEM_V1 + '/courses/getAllCourses',
  URL_GET_POSTS: URL_SYSTEM_V1 + '/posts/getAllPosts',

  //account
  URL_GET_USER_COURSES: URL_SYSTEM_V1 + '/profiles/getUserCourses',
  URL_GET_USER_NOTIFICATIONS: URL_SYSTEM_V1 + '/notification/getUserNotification',
  URL_UPLOAD_AVATAR: URL_SYSTEM_V1 + '/profiles/uploadAvatar',


    // document
    URL_GET_DOCUMENTS: URL_SYSTEM_V1 + '/document/',
    // article
    URL_ARTICLE: URL_SYSTEM_V1 + '/article/',
    // type category
    URL_TYPE_CATEGORY: URL_SYSTEM_V1 + '/type-category/',
  URL_GET_POSTS: URL_SYSTEM_V1 + '/posts/getAllPosts',
  URL_GET_NOTIFICATIONS: URL_SYSTEM_V1 + '/notifications/getAllNotification',
}
