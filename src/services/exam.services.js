import config from './api/config';
import { options, handleResponse } from '../helpers';
import { cookiesUtil } from '../utilities';
import ajaxHelper from './api';

export const examServices = {
  getQuestions
};

function getQuestions(questionsID) {
  return handleResponse(ajaxHelper.post(config.URL_GET_QUESTIONS, {questionsID}, options()));
}

