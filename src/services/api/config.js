// thay đổi api way ở đây nek
const URL_SYSTEM_V1 = 'http://localhost:5000/api';
export default {
  URL_LOGIN: URL_SYSTEM_V1 + '/auth/login',
  URL_REGISTER: URL_SYSTEM_V1 + '/auth/register',
  URL_GET_COURSES: URL_SYSTEM_V1 + '/courses/getAllCourses',


  // exam
  URL_GET_QUESTIONS: URL_SYSTEM_V1 + '/exam/getQuestions',
  URL_POST_RESULT_EXAM: URL_SYSTEM_V1 + '/exam/getResultExam',
    URL_LOGIN: URL_SYSTEM_V1 + '/auth/login',
    URL_REGISTER: URL_SYSTEM_V1 + '/auth/register',
    URL_GET_COURSES: URL_SYSTEM_V1 + '/courses/getAllCourses',
    URL_GET_POSTS: URL_SYSTEM_V1 + '/posts/getAllPosts',

    // document
    URL_GET_DOCUMENTS: URL_SYSTEM_V1 + '/document/',
    // article
    URL_ARTICLE: URL_SYSTEM_V1 + '/article/',
    // type category
    URL_TYPE_CATEGORY: URL_SYSTEM_V1 + '/type-category/',
}
