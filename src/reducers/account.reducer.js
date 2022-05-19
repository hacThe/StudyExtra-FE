import { userConstants } from "../constaint";

const initialState = {
  courses: [],
 // exams: [],
  isLoading: false,
  error: ""
};

export function userCourses(state = initialState, action) {
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
    default:
      return state;
  }
}
