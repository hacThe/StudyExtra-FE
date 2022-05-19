import { userConstants } from "../constaint";

const initialState = {
  courses: [],
  exams: [],
  transaction: [],
  isLoading: false,
  error: ""
};

export function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case userConstants.GET_USER_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.userCourses
      };
    case userConstants.GET_USER_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    //-----------------transaction-----------------------
    case userConstants.GET_USER_TRANSACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userConstants.GET_USER_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: action.userTransaction
      };
    case userConstants.GET_USER_TRANSACTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
