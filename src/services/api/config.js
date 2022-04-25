// thay đổi api way ở đây nek
const URL_SYSTEM_V1 = 'http://localhost:5000/api';
export default {
  URL_LOGIN: URL_SYSTEM_V1 + '/auth/login',
  URL_REGISTER: URL_SYSTEM_V1 + '/auth/register',
  URL_GET_COURSES: URL_SYSTEM_V1 + '/courses/getAllCourses',
  URL_GET_POSTS: URL_SYSTEM_V1 + '/posts/getAllPosts',
  URL_GET_NOTIFICATIONS: URL_SYSTEM_V1 + '/notifications/getAllNotification',
}
