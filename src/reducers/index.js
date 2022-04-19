import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { exam, resultExam } from "./exam.reducer";
import { document } from "./document.reducer";
import { ranking } from "./ranking.reducer";
import { search } from "./search.reducer";
import { post } from "./post.reducer";
import { userCourses } from "./account.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  course, // course
  authentication,
  exam,
  resultExam,
  ranking, // ranking
  search,
  post,
  document,
  userCourses
});

export default rootReducer;
