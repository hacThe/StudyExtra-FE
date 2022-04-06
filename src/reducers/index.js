import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { document } from "./document.reducer";
import { ranking } from "./ranking.reducer";

const rootReducer = combineReducers({
    app, // appReducer
    document, // document
    course, // course
    authentication,
    ranking // ranking
});

export default rootReducer;
