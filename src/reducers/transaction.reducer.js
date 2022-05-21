import { transactionConstains } from "../constaint";

const initialState = {
  transactions: [],
  transaction: {},
  isLoading: true,
  error: "",
};

export function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.transactions
      };

      case transactionConstains.GET_ALL_WAITING_DEPOSITE_GEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
