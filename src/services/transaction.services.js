import config from './api/config';
import { options, handleResponse } from '../helpers';
import ajaxHelper from './api';

export const transactionServices = {
  getDepositeGemRequest, 
  _delete,
  confirm
};

function getDepositeGemRequest() {
  return handleResponse(ajaxHelper.get(config.URL_GET_WAITING_TRANSACTIONS, {}, options()));
}


function _delete(transaction) {
  return handleResponse(
    ajaxHelper.put(config.URL_DELETE_TRANSACTION + `/${transaction._id}`, {userID: transaction.userID._id}, options())
  )
}


function confirm(transaction) {
  return handleResponse(
    ajaxHelper.put(config.URL_CONFIRM_TRANSACTION + `/${transaction._id}`, {userID: transaction.userID._id}, options())
  )
}
