import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const examServices = {
  getQuestions, 
  postResultExam
};

function getQuestions(questionsID) {
  return handleResponse(ajaxHelper.post(config.URL_GET_QUESTIONS, {questionsID}, options()));
}

function postResultExam(questionsID, examID, userAnswer) {
  return handleResponse(ajaxHelper.post(config.URL_POST_RESULT_EXAM, {questionsID, examID, userAnswer}, options()));
}

