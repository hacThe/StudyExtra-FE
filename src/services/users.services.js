import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const usersServices = {
  login,
  logout,
  register,
  getAll,
  getUserCourses,
  getUserNotifications,
  uploadAvatar,
  verifyEmail
};

function login(username, password) {
  return handleResponse(
    ajaxHelper.post(config.URL_LOGIN, { username, password }, options())
  );
}

function register(user) {
  return handleResponse(ajaxHelper.post(config.URL_REGISTER, user, options()));
}

function logout() {
  cookiesUtil.remove('_jwt');
  cookiesUtil.remove('_user');
  return true;
}

function getAll(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_USERS, params, options()));
}

function getUserCourses(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_GET_USER_COURSES, params, options()));
}

function getUserNotifications(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_GET_USER_NOTIFICATIONS, params, options()));
}

function uploadAvatar(avatarUrl) {
  return handleResponse(ajaxHelper.post(config.URL_UPLOAD_AVATAR, {avatarUrl}, options()));
}

function verifyEmail(id, token) {
  return handleResponse(ajaxHelper.get(config.URL_VERIFY_EMAIL + id + "/verify/" + token, options()));
}