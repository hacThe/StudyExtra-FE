import config from "./api/config";
import { options, handleResponse } from "../helpers";
import { cookiesUtil } from "../utilities";
import ajaxHelper from "./api";

export const usersServices = {
  login,
  logout,
  register,
  getAll,
  getUserCourses,
  getUserNotifications,
  uploadAvatar,
  getOne,
  toogleLockState,
  _delete,
  updateProfile,
  verifyEmail,
  sendVerifyCode,
  verifyCode,
  setNewPassword,
  depositRequest,
  getUserTransaction,
  resetPassword,
  resendVerifyEmail,
  getCurrentUser,
  editUserGem
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
  cookiesUtil.remove("_jwt");
  cookiesUtil.remove("_user");
  return true;
}

function getOne(id) {
  return handleResponse(
    ajaxHelper.get(config.URL_USERS + `/${id}`, {}, options())
  );
}


function getCurrentUser(id) {
  return handleResponse(
    ajaxHelper.get(config.URL_USERS + `/getCurrentUser`, {}, options())
  );
}

function toogleLockState(id) {
  return handleResponse(
    ajaxHelper.post(config.URL_USER_TOOGLE_BLOCK + `/${id}`, {}, options())
  );
}

function _delete(id) {
  return handleResponse(
    ajaxHelper.delete(config.URL_USERS + `/${id}`, options())
  );
}

function getAll(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_USERS, params, options()));
}

function getUserCourses(params = {}) {
  return handleResponse(
    ajaxHelper.get(config.URL_GET_USER_COURSES, params, options())
  );
}

function getUserNotifications(params = {}) {
  return handleResponse(
    ajaxHelper.get(config.URL_GET_USER_NOTIFICATIONS, params, options())
  );
}

function uploadAvatar(avatarUrl) {
  return handleResponse(
    ajaxHelper.post(config.URL_UPLOAD_AVATAR, { avatarUrl }, options())
  );
}
function updateProfile(newInfo) {
  return handleResponse(
    ajaxHelper.post(config.URL_UPDATE_PROFILE, newInfo, options())
  );
}


function editUserGem(amount, userId) {
  return handleResponse(
    ajaxHelper.post(config.URL_UPDATE_GEM, {amount, userId}, options())
  );
}

function verifyEmail(id, token) {
  return handleResponse(
    ajaxHelper.get(config.URL_VERIFY_EMAIL + id + "/verify/" + token, options())
  );
}

function sendVerifyCode(username) {
  return handleResponse(
    ajaxHelper.post(config.URL_VERIFY_SEND_VERIFY_CODE, { username }, options())
  );
}
function verifyCode(username, verifyCode) {
  return handleResponse(
    ajaxHelper.post(config.URL_VERIFY_CODE, { username, verifyCode }, options())
  );
}
function setNewPassword(username, verifyCode, newPassword) {
  return handleResponse(
    ajaxHelper.post(
      config.URL_SET_NEW_PASSWORD,
      { username, verifyCode, newPassword },
      options()
    )
  );
}
function depositRequest(transaction) {
  return handleResponse(
    ajaxHelper.post(config.URL_DEPOSIT_REQUEST, transaction, options())
  );
}
function getUserTransaction(params = {}) {
  return handleResponse(
    ajaxHelper.get(config.URL_GET_USER_TRANSACTION, params, options())
  );
}
function resetPassword(oldPassword, newPassword) {
  return handleResponse(
    ajaxHelper.post(
      config.URL_RESET_PASSWORD,
      { oldPassword, newPassword },
      options()
    )
  );
}

function resendVerifyEmail(params = {}) {
  return handleResponse(
    ajaxHelper.get(config.URL_RESEND_VERIFYEMAIL, params, options())
  );
}
