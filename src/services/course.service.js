import config from "./api/config";
import { options, handleResponse } from "../helpers";
import { cookiesUtil } from "../utilities";
import ajaxHelper from "./api";

export const courseService = {
  getAll,
  create,
  getOne,
  update,
  _delete,
  addChapter,
  editChapter,
  addLesson,
  editLesson,
  deleteChapter,
  deleteLesson,
  getLesson,
  getStudents,
};

function getAll() {
  return handleResponse(ajaxHelper.get(config.URL_GET_COURSES, {}, options()));
}

function update(course, id) {
  return handleResponse(
    ajaxHelper.put(
      config.URL_UPDATE_COURSE + `/${id}`,
      { ...course },
      options()
    )
  );
}

function _delete(id) {
  return handleResponse(
    ajaxHelper.delete(config.URL_DELETE_COURSE + `/${id}`, options())
  );
}

function getOne(courseId, userId) {
  return handleResponse(
    ajaxHelper.get(
      config.URL_GET_COURSE + `/${courseId}`,
      { userId },
      options()
    )
  );
}

function getStudents(courseId, userId) {
  return handleResponse(
    ajaxHelper.get(
      config.URL_GET_COURSE_STUDENT + `/${courseId}`,
      { userId },
      options()
    )
  );
}

function getLesson(lessonId, userId) {
  return handleResponse(
    ajaxHelper.get(
      config.URL_GET_LESSON + `/${lessonId}`,
      { userId },
      options()
    )
  );
}

function create(data) {
  console.log({ data });
  return handleResponse(
    ajaxHelper.post(config.URL_CREATE_COURSE, { ...data }, options())
  );
}

function addChapter(chapter, id) {
  return handleResponse(
    ajaxHelper.post(
      config.URL_ADD_CHAPTER + `/${id}`,
      { ...chapter },
      options()
    )
  );
}

function addLesson(lesson) {
  return handleResponse(
    ajaxHelper.post(
      config.URL_ADD_LESSON + `/${lesson.chapter}`,
      { ...lesson },
      options()
    )
  );
}

function editLesson(lesson) {
  return handleResponse(
    ajaxHelper.put(
      config.URL_EDIT_LESSON + `/${lesson._id}`,
      { ...lesson },
      options()
    )
  );
}

function editChapter(chapter) {
  return handleResponse(
    ajaxHelper.put(
      config.URL_EDIT_CHAPTER + `/${chapter._id}`,
      { ...chapter },
      options()
    )
  );
}

function deleteChapter(chapter) {
  return handleResponse(
    ajaxHelper.put(
      config.URL_DELETE_CHAPTER + `/${chapter._id}`,
      { courseId: chapter.courseId },
      options()
    )
  );
}

function deleteLesson(lesson) {
  return handleResponse(
    ajaxHelper.put(
      config.URL_DELETE_LESSON + `/${lesson._id}`,
      { chapterId: lesson.chapterId },
      options()
    )
  );
}
