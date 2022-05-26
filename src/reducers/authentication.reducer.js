import { userConstants } from '../constaint';
import { cookiesUtil } from '../utilities';

let user = cookiesUtil.getAccessToken();
const initialState = user ? { waiting: false, isLoggedIn: true } : { waiting: false, isLoggedIn: false };

console.log({ initialState })
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log('login-request from authentication.reducer');
      return {
        waiting: true,
        error: false
      };
    case userConstants.LOGIN_SUCCESS:
      //user: cookiesUtil.getCurrentUserInfo()
      window.location.reload(true);
      return {
        waiting: false,
        isLoggedIn: true,
        error: false,
        user
      };
    case userConstants.LOGOUT:
      window.location.reload(true);
      return {};
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        waiting: false,
        error: 'Unregconize username or password'
      };
    case userConstants.UPLOAD_AVATAR_REQUEST:
      return {
        ...state,
        waiting: true,
        isLoggedIn: true,
        error: false,
      };
      case userConstants.UPLOAD_AVATAR_FAILURE:
        return {
          ...state,
          waiting: false,
          isLoggedIn: true,
          error: true,
        };
    case userConstants.UPLOAD_AVATAR_SUCCESS:
      return {
        waiting: false,
        isLoggedIn: true,
        error: false,
      };

      case userConstants.UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          waiting: true,
          isLoggedIn: true,
          error: false,
        };
        case userConstants.UPDATE_PROFILE_FAILURE:
          return {
            ...state,
            waiting: false,
            isLoggedIn: true,
            error: true,
          };
      case userConstants.UPDATE_PROFILE_SUCCESS:
        return {
          waiting: false,
          isLoggedIn: true,
          error: false,
        };
    default:
      return state
  }
}

