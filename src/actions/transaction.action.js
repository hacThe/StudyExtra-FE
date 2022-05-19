import { transactionConstains } from "../constaint";
import { transactionServices } from "../services/transaction.services";

export const transactionActions = {
    getDepositeGemRequest,
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