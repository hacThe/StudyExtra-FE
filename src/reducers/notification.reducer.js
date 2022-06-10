import { userConstants } from "../constaint";

const initialState = {
  notifications: [],
  isLoading: false,
  error: ""
};

export function userNotifications(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_NOTIFICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case userConstants.GET_USER_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: action.userNotifications
      };
    case userConstants.GET_USER_NOTIFICATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
