import { courseConstants } from "../constaint";
import { courseService } from "../services";
import { stringUtils } from "../utilities";

export const courseAction = {
  getAllCourse,
  create,
  getOne,
  update,
  _delete,
  addChapter,
  editChapter,
  deleteChapter,
  addLesson,
  editLesson,
  deleteLesson
};

function getOne(courseId, userId) {
  return (dispatch) => {
    dispatch(request());
    console.log("Course Action get all has called");

    courseService.getOne(courseId, userId).then(
      (courses) => {
        console.log(courses.data);
        dispatch(success(courses.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );

    function request() {
      return { type: courseConstants.GET_COURSE_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.GET_COURSE_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.GET_COURSE_FAILURE, error };
    }
  };
}

function update(id, course, navigate) {
  return (dispatch) => {
    dispatch(request());
    if (course.name) {
      course["courseId"] = stringUtils
        .makeDashString(course.name)
        .toLowerCase();
        course.price = parseInt(course.price);
    }
    console.log("Course Action update course:", course, id);

    courseService.update(course, id).then(
      (course) => {
        console.log(course);
        dispatch(success(course));
        if (navigate)
          {
              navigate('/quan-ly/khoa-hoc')
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );

    function request() {
      return { type: courseConstants.UPDATE_COURSE_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.UPDATE_COURSE_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.UPDATE_COURSE_FAILURE, error };
    }
  };
}

function getAllCourse() {
  return (dispatch) => {
    dispatch(request());
    console.log("Course Action get all has called");

    courseService.getAll().then(
      (courses) => {
        console.log(courses.data);
        dispatch(success(courses.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );

    function request() {
      return { type: courseConstants.GET_COURSES_REQUEST };
    }
    function success(courses) {
      return { type: courseConstants.GET_COURSES_SUCCESS, courses };
    }
    function failure(error) {
      return { type: courseConstants.GET_COURSES_FAILURE, error };
    }
  };
}

function create(data, navigate) {
  return (dispatch) => {
    dispatch(request());
    data["_id"] = stringUtils.makeDashString(data.name).toLowerCase();
    data.price = parseInt(data.price);
    console.log("Course Action create course:", data);

    courseService.create(data).then(
      (course) => {
        console.log(course);
        dispatch(success(course));
        if (navigate)
          {
              navigate('/quan-ly/khoa-hoc')
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_COURSE_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_COURSE_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_COURSE_FAILURE, error };
    }
  };
}

function addChapter(chapter, id, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.addChapter(chapter, id).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}


function editChapter(chapter, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.editChapter(chapter).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}

function deleteChapter(chapter, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.deleteChapter(chapter).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}


function addLesson(lesson, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.addLesson(lesson).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}


function editLesson(lesson, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.editLesson(lesson).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}

function deleteLesson(chapter, callback){
  return (dispatch)=>{
    dispatch(request())
    courseService.deleteLesson(chapter).then(
      (course) => {
        console.log(course);
        dispatch(success(course.data));
        if (callback)
          {
              callback()
          }
      },
      (error) => {
        dispatch(failure(error.toString()));
        console.log({ error });
      }
    );
    function request() {
      return { type: courseConstants.CREATE_CHAPTER_REQUEST };
    }
    function success(course) {
      return { type: courseConstants.CREATE_CHAPTER_SUCCESS, course };
    }
    function failure(error) {
      return { type: courseConstants.CREATE_CHAPTER_FAILURE, error };
    }
  }
}

function _delete(id, navigate) {
    return (dispatch) => {
      dispatch(request());
      courseService._delete(id).then(
        (res) => {
          console.log(res);
          dispatch(success(res));
          if (navigate)
          {
              navigate('/quan-ly/khoa-hoc')
          }
        },
        (error) => {
          dispatch(failure(error.toString()));
          console.log({ error });
        }
      );
      function request() {
        return { type: courseConstants.DELETE_COURSE_REQUEST };
      }
      function success(course) {
        return { type: courseConstants.DELETE_COURSE_SUCCESS, course };
      }
      function failure(error) {
        return { type: courseConstants.DELETE_COURSE_FAILURE, error };
      }
    };
  }
  