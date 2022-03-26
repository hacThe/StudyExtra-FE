import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { search } from './search.reducer'


const rootReducer = combineReducers({
  app, // appReducer
  course, // course
  authentication,
  search
});

export default rootReducer;
