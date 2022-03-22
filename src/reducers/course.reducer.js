import { courseConstants } from "../constaint";

const initialState = {
  courses: [],
  course: {},
  isLoading: false,
  error: ""
};

export function course(state = initialState, action) {
  switch (action.type) {
    case courseConstants.GET_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.GET_COURSES_SUCCESS:
        const coursess = action.courses;
        console.log({coursess})
      return {
        ...state,
        isLoading: false,
        courses: coursess.data
        // courses: action.courses
      };
    case courseConstants.GET_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
