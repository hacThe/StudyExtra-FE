import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const examServices = {
  getExams,
  getExam,
  postResultExam
};

function getExams(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_GET_ALL_TEST_EXAM, params, options()));
}
function getExam(id) {
  return handleResponse(ajaxHelper.get(config.URL_GET_EXAM + id, options()));
}
function postResultExam(questionsID, examID, userAnswer) {
  return handleResponse(ajaxHelper.post(config.URL_POST_RESULT_EXAM, {questionsID, examID, userAnswer}, options()));
}

