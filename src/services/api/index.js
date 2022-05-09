import axios from 'axios';

const AjaxHelper = {};

AjaxHelper.get = (url, params, options) => {
  return axios.get(url, { params: params, ...options });
};

AjaxHelper.post = (url, params, options) => {
  return axios.post(url, params, options);
};

AjaxHelper.put = (url, params, options) => {
  return axios.put(url, params, options);
};

AjaxHelper.delete = (url, options) => {
  return axios.delete(url, options);
};

AjaxHelper.deleteFix = (url, params) => {
  console.log("url", url);
  console.log("params", params);
  return axios.delete(url, {data:params});
};

export default AjaxHelper;
