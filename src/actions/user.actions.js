import { userConstants } from '../constaint';
import { usersServices } from '../services';


export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

/// này là hàm login
function login(username, password) {
  return dispatch => { // dispatch này lấy đâu ra mà gọi được?
   
    dispatch(request()); 
    dispatch(success());


    // usersServices.login(username, password).then(
    //   user => {
    //     if (user && !user['error']) {
    //       cookiesUtil.set('_tk_transport_', user['data']['system_token'])
    //       dispatch(success());
    //     }
    //   },
    //   error => {
    //     console.log('the function is error');
    //     fetch('http://localhost:3006/mockup-data/user.json')
    //     .then(res => res.json())
    //     .then((users) => {
    //       // lọc user from array 
    //         const crrUser = users.filter(user => (user.username === username && user.password === password));
    //         if (crrUser.length > 0) {
    //           cookiesUtil.set('_tk_transport_', "demo")
    //           dispatch(success());
    //         }
    //         else dispatch(failure(failure('Unrecognize username or password')));
            
    //       }).catch(err => console.error(err));
        
        
    //     // dispatch(failure(error.toString()));
    //     // dispatch(alertActions.error(error.toString()));
    //   }
    // );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success() {
    return { type: userConstants.LOGIN_SUCCESS };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return dispatch => {
    usersServices.logout();
    dispatch(success());
  };
  function success() {
    return { type: userConstants.LOGOUT };
  }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    usersServices.register(user).then(
      () => {
        dispatch(success());
        // history.push('/login');
        // dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    usersServices.getAll()
      .then(
        users => dispatch(success(users['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    usersServices.delete(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };


  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}
