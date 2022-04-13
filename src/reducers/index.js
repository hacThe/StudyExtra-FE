import { combineReducers } from "redux";

import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { exam } from "./exam.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  authentication,
  exam
});

export default rootReducer;
