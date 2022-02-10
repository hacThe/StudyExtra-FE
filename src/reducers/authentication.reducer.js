import { userConstants } from '../constaint';
import { cookiesUtil } from '../utilities';

let user = cookiesUtil.getCurrentUser();
const initialState = user ? { waiting: false, isLoggedIn: true ,user } : {waiting: false, isLoggedIn: false };

export function authentication(state = initialState, action) {
  console.log('dispatch from authentication.reducer');
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log('login-request from authentication.reducer');
      return {
        waiting: true,
        error: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        waiting: false,
        isLoggedIn: true,
        error: false
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
    default:
      return state
  }
}
