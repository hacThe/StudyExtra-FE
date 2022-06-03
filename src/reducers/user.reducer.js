import { userConstants } from "../constaint";

const initialState = {
  user: {},
  currentUser: undefined,
  users: [],
  isLoading: false,
  error: "",
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.GETALL_SUCCESS:
      return { ...state, isLoading: false, users: action.users };
    case userConstants.GETALL_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case userConstants.LOGIN_SUCCESS:
      return { currentUser: action.user };

    case userConstants.GETONE_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.GETONE_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case userConstants.GETONE_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case userConstants.GET_CURRENT_USER_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.GET_CURRENT_USER_SUCCESS:
      console.log({ currentUser: action.user });
      return { ...state, isLoading: false, currentUser: action.user };
    case userConstants.GET_CURRENT_USER_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case userConstants.LOGOUT:
      return {
        ...initialState,
      };

    case userConstants.DELETE_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.filter((user) => user._id != action.id),
        user: {},
      };
    case userConstants.DELETE_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
