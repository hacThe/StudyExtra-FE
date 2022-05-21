import { transactionConstains } from "../constaint";
import { transactionServices } from "../services/transaction.services";

export const transactionActions = {
    getDepositeGemRequest,
    _delete,
    confirm,
}

function getDepositeGemRequest(callback){
    return (dispatch) => {
        dispatch(request());
    
        transactionServices.getDepositeGemRequest().then(
          (transactions) => {dispatch(success(transactions["data"]))
            if (callback)
            {
              callback(transactions["data"])
            }
        },
          (error) => dispatch(failure(error.toString()))
        );
      };
    
      function request() {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_REQUEST };
      }
      function success(transactions) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_SUCCESS, transactions };
      }
      function failure(error) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_FAILURE, error };
      }
}





function _delete(transaction,callback){
    return (dispatch) => {
        dispatch(request());
    
        transactionServices._delete(transaction).then(
          (transactions) => {dispatch(success(transactions["data"]))
            if (callback)
            {
              callback(transactions["data"])
            }
        },
          (error) => dispatch(failure(error.toString()))
        );
      };
    
      function request() {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_REQUEST };
      }
      function success(transactions) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_SUCCESS, transactions };
      }
      function failure(error) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_FAILURE, error };
      }
}



function confirm(transaction,callback){
    return (dispatch) => {
        dispatch(request());
    
        transactionServices.confirm(transaction).then(
          (transactions) => {dispatch(success(transactions["data"]))
            if (callback)
            {
              callback(transactions["data"])
            }
        },
          (error) => dispatch(failure(error.toString()))
        );
      };
    
      function request() {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_REQUEST };
      }
      function success(transactions) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_SUCCESS, transactions };
      }
      function failure(error) {
        return { type: transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_FAILURE, error };
      }
}