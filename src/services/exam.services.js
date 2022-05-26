import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const examServices = {
  getExams,
  getExam,
  CheckExamRequirement,
  postResultExam,
  getResultExam
};

function getExams(params = {}) {
  return handleResponse(ajaxHelper.get(config.URL_GET_ALL_TEST_EXAM, params, options()));
}
function getExam(id) {
  return handleResponse(ajaxHelper.get(config.URL_GET_EXAM + id, options()));
}
function CheckExamRequirement(id) {
  return handleResponse(ajaxHelper.post(config.URL_CHECK_EXAM_REQUIREMENT, {id}, options()));
}

function postResultExam(examID, userAnswer) {
  return handleResponse(ajaxHelper.post(config.URL_POST_RESULT_EXAM, {examID, userAnswer}, options()));
}
function getResultExam(examID) {
  return handleResponse(ajaxHelper.get(config.URL_GET_RESULT_EXAM + examID, options()));
}




