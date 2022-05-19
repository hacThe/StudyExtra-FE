import config from './api/config';
import { options, handleResponse } from '../helpers';
import ajaxHelper from './api';

export const transactionServices = {
  getDepositeGemRequest, 
};

function getDepositeGemRequest() {
  return handleResponse(ajaxHelper.get(config.URL_GET_WAITING_TRANSACTIONS, {}, options()));
}
