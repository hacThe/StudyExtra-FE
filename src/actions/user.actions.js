import { userConstants } from "../constaint";
import { userNotifications } from "../reducers/notification.reducer";
import { usersServices } from "../services";
import { cookiesUtil } from "../utilities";

export const userActions = {
  login,
  logout,
 // register,
  getAll,
  getOne,
  delete: _delete,
  getUserCourses,
  getUserNotifications,
  uploadAvatar,
  toogleLockState,
  updateProfile,
  getUserTransaction,
  getCurrentUser,
  editUserGem
};



function editUserGem(amount, userId, callback){
  return (dispatch) => {
      dispatch(request());
  
      usersServices.editUserGem(amount, userId).then(
        (transactions) => {dispatch(success(transactions["data"]))
          if (callback)
          {
            callback(transactions["data"])
          }
      },
        (error) => dispatch(failure(error.toString()))
      );
    };
  
    function request() {
      return { type: userConstants.GETONE_REQUEST };
    }
    function success(user) {
      return { type: userConstants.GETONE_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.GETONE_FAILURE, error };
    }
}

/// này là hàm login
function login(username, password) {
  return (dispatch) => {

    dispatch(request());
    // dispatch(success());

    usersServices.login(username, password).then(
      (user) => {

        alert("login successfully", user)
        cookiesUtil.setAccessToken(user.token)
        cookiesUtil.setCurrentUserInfo(user.user)
        dispatch(success());
      },
      (error) => {

        alert(error);
        dispatch(failure(error.toString()))

        // dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
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
  return (dispatch) => {
    usersServices.logout();
    dispatch(success());
   // window.location.reload(true);
  };
  function success() {
    return { type: userConstants.LOGOUT };
  }
}

/* function register(user) {
  return (dispatch) => {
    //dispatch(request(user));

    usersServices.register(user).then(
      () => {
      //  dispatch(success());
        alert("register successfully");
        // dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
     ////   dispatch(failure(error.toString()));
        alert("ERROR: " + error.toString());
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
} */

function getOne(id, callback) {
  return (dispatch) => {
    dispatch(request());

    usersServices.getOne(id).then(
      (users) => {dispatch(success(users["data"]))
        if (callback)
        {
          callback(users["data"])
        }
    },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETONE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GETONE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GETONE_FAILURE, error };
  }
}



function getCurrentUser(id, callback) {
  return (dispatch) => {
    dispatch(request());

    usersServices.getCurrentUser(id).then(
      (users) => {dispatch(success(users["data"]))
        if (callback)
        {
          callback(users["data"])
        }
    },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_CURRENT_USER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GET_CURRENT_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GET_CURRENT_USER_FAILURE, error };
  }
}


function toogleLockState(id, callback) {
  return (dispatch) => {
    dispatch(request());

    usersServices.toogleLockState(id).then(
      (users) => {dispatch(success(users["data"]))
        if (callback)
        {
          callback(users["data"])
        }
    },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETONE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GETONE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GETONE_FAILURE, error };
  }
}



function getAll() {
  return (dispatch) => {
    dispatch(request());

    usersServices.getAll().then(
      (users) => dispatch(success(users["data"])),
      (error) => dispatch(failure(error.toString()))
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
function _delete(id, callback) {
  return (dispatch) => {
    dispatch(request(id));

    usersServices._delete(id).then(
      () => {dispatch(success(id))
      if (callback){
        callback(id)
      }},
      (error) => dispatch(failure(id, error.toString()))
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


//thong tin tai khoan
function getUserCourses() {
  return (dispatch) => {
    dispatch(request());
    usersServices.getUserCourses().then(
      (userCourses) => dispatch(success(userCourses)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_COURSES_REQUEST};
  }
  function success(userCourses) {
    return { type: userConstants.GET_USER_COURSES_SUCCESS, userCourses};
  }
  function failure(error) {
    return { type: userConstants.GET_USER_COURSES_FAILURE, error };
  }
}

function getUserNotifications() {
  return (dispatch) => {
    dispatch(request());
    usersServices.getUserNotifications().then(
      (userNotifications) => dispatch(success(userNotifications)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_NOTIFICATION_REQUEST};
  }
  function success(userNotifications) {
    return { type: userConstants.GET_USER_NOTIFICATION_SUCCESS, userNotifications};
  }
  function failure(error) {
    return { type: userConstants.GET_USER_NOTIFICATION_FAILURE, error };
  }
}

function uploadAvatar(avatarUrl) {
  return (dispatch) => {
    dispatch(request());
    usersServices.uploadAvatar(avatarUrl).then(
      (user) => {
        cookiesUtil.setCurrentUserInfo(user.user)
        dispatch(success(user))
        window.location.reload(true);
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.UPLOAD_AVATAR_REQUEST};
  }
  function success(user) {
    return { type: userConstants.UPLOAD_AVATAR_SUCCESS, user};
  }
  function failure(error) {
    return { type: userConstants.UPLOAD_AVATAR_FAILURE, error };
  }
}

/* function verifyEmail(id, token) {
  return (dispatch) => {
    dispatch(request());
    usersServices.verifyEmail(id, token).then(
      (emailVerifyResult) => {
        console.log("verify errrrrr: ", emailVerifyResult);
        dispatch(success())
      },
      (error) => {
        console.log("errrrrrrr: ", error.toString())
        dispatch(failure(error.toString()))
      }
    );
  };

  function request() {
    return { type: userConstants.VERIFY_EMAIL_REQUEST};
  }
  function success() {
    return { type: userConstants.VERIFY_EMAIL_SUCCESS};
  }
  function failure(error) {
    return { type: userConstants.VERIFY_EMAIL_FAILURE, error };
  }
} */

  
function updateProfile(newInfo) {
  return (dispatch) => {
    dispatch(request());
    usersServices.updateProfile(newInfo).then(
      (user) => {
        cookiesUtil.setCurrentUserInfo(user.user)
        dispatch(success(user))
        window.location.reload(true);
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.UPDATE_PROFILE_REQUEST};
  }
  function success(user) {
    return { type: userConstants.UPDATE_PROFILE_SUCCESS, user};
  }
  function failure(error) {
    return { type: userConstants.UPDATE_PROFILE_FAILURE, error };
  }
}

function getUserTransaction() {
  return (dispatch) => {
    dispatch(request());
    usersServices.getUserTransaction().then(
      (userTransaction) => {
        dispatch(success(userTransaction))
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_TRANSACTION_REQUEST};
  }
  function success(userTransaction) {
    return { type: userConstants.GET_USER_TRANSACTION_SUCCESS, userTransaction};
  }
  function failure(error) {
    return { type: userConstants.GET_USER_TRANSACTION_FAILURE, error };
  }
}

