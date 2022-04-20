import { userConstants } from '../constaint';
import { cookiesUtil } from '../utilities';

let user = cookiesUtil.getCurrentUserInfo();
const initialState = user ? { waiting: false, isLoggedIn: true ,user } : {waiting: false, isLoggedIn: false };

console.log({initialState})
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
    default:
      return state
  }
}
