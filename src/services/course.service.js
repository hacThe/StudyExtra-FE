import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const courseService = {
  getAll
};

function getAll() {
  return handleResponse(
    ajaxHelper.get(config.URL_GET_COURSES, {}, options())
  );
}
