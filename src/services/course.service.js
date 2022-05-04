import config from "./api/config";
import { options, handleResponse } from "../helpers";
import { cookiesUtil } from "../utilities";
import ajaxHelper from "./api";

export const courseService = {
  getAll,
  create,
  getOne,
  update,
  _delete
};

function getAll() {
  return handleResponse(ajaxHelper.get(config.URL_GET_COURSES, {}, options()));
}

function update(course, id) {
  return handleResponse(
    ajaxHelper.post(
      config.URL_UPDATE_COURSE + `/${id}`,
      { ...course },
      options()
    )
  );
}

function _delete(id){
  return handleResponse(
    ajaxHelper.delete(config.URL_DELETE_COURSE + `/${id}`, options())
  )
}

function getOne(courseId) {
  return handleResponse(
    ajaxHelper.get(config.URL_GET_COURSE + `/${courseId}`, {}, options())
  );
}

function create(data) {
  console.log({ data });
  return handleResponse(
    ajaxHelper.post(config.URL_CREATE_COURSE, { ...data }, options())
  );
}
