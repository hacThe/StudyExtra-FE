import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { exam, resultExam } from "./exam.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  course, // course
  authentication,
  exam, 
  resultExam
});

export default rootReducer;
