import { combineReducers } from "redux";

import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { document } from "./document.reducer";


const rootReducer = combineReducers({
  app, // appReducer
  authentication,
  document  
});

export default rootReducer;
