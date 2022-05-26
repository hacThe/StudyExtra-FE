import { userConstants } from '../constaint';
import { cookiesUtil } from '../utilities';

let user = cookiesUtil.getCurrentUserInfo();
const initialState = user ? { waiting: false, isLoggedIn: true, user } : { waiting: false, isLoggedIn: false };

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
        user: action.user
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
          user: action.user
        };
        /* case userConstants.VERIFY_EMAIL_SUCCESS:
    
        return {
          ...state,
          waiting: false,
          error: false,
          user: { ...user, emailVerified: true}
        };
        case userConstants.VERIFY_EMAIL_FAILURE:
    
          return {
            ...state,
            waiting: false,
            error: false,
            user: { ...user, emailVerified: false}
          }; */
    default:
      return state
  }
}

