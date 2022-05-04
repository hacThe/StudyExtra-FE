import { courseConstants } from "../constaint";

const initialState = {
  courses: [],
  course: {
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    introVideoUrl: "",
    contents: [],
    categories: [],
    requirements: [],
    chapters: [],
  },
  isLoading: false,
  error: "",
};

export function course(state = initialState, action) {
  switch (action.type) {
    case courseConstants.GET_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.GET_COURSE_SUCCESS:
      return {
        ...state,
        course: action.course,
      };
    case courseConstants.GET_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case courseConstants.GET_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.courses,
      };
    case courseConstants.GET_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case courseConstants.CREATE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.CREATE_COURSE_SUCCESS:
      return {
        ...state,
        course: action.course,
        isLoading: false,
      };

    case courseConstants.CREATE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case courseConstants.UPDATE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        course: action.course,
        isLoading: false,
      };

    case courseConstants.UPDATE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case courseConstants.DELETE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case courseConstants.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case courseConstants.DELETE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
