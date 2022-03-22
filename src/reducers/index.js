import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  course, // course
  authentication
});

export default rootReducer;
