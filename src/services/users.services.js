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
  updateProfile,
  verifyEmail,
  sendVerifyCode,
  verifyCode,
  setNewPassword,
  depositRequest
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
function updateProfile(newInfo) {
  return handleResponse(ajaxHelper.post(config.URL_UPDATE_PROFILE, newInfo, options()));
}

function verifyEmail(id, token) {
  return handleResponse(ajaxHelper.get(config.URL_VERIFY_EMAIL + id + "/verify/" + token, options()));
}

function sendVerifyCode(username) {
  return handleResponse(ajaxHelper.post(config.URL_VERIFY_SEND_VERIFY_CODE, {username}, options()));
}
function verifyCode(username, verifyCode) {
  return handleResponse(ajaxHelper.post(config.URL_VERIFY_CODE, {username, verifyCode}, options()));
}
function setNewPassword(username, verifyCode, newPassword) {
  return handleResponse(ajaxHelper.post(config.URL_SET_NEW_PASSWORD, {username, verifyCode, newPassword}, options()));
}
function depositRequest(transaction) {
  return handleResponse(ajaxHelper.post(config.URL_DEPOSIT_REQUEST, transaction, options()));
}