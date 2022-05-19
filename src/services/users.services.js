import config from "./api/config";
import { options, handleResponse } from "../helpers";
import { cookiesUtil } from "../utilities";
import ajaxHelper from "./api";

export const usersServices = {
  login,
  logout,
  getAll,
  getUserCourses,
  getUserNotifications,
  uploadAvatar,
  getOne
};

function login(username, password) {
  return handleResponse(
    ajaxHelper.post(config.URL_LOGIN, { username, password }, options())
  );
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
