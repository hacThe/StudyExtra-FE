import { combineReducers } from "redux";

import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  authentication
});

export default rootReducer;
