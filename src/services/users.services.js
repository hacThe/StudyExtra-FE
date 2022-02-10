import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const usersServices = {
  login,
  logout,
  getAll
};

function login(email, password) {
  return handleResponse(
    ajaxHelper.get(config.URL_LOGIN, { userID: email, password }, options())
  );
}

function logout() {
  cookiesUtil.remove('_tk_transport_');
  return true;
}

function getAll(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_USERS, params, options()));
}

