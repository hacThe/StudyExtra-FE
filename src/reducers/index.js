import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { document } from "./document.reducer";
import { ranking } from "./ranking.reducer";
import { search } from './search.reducer'
import { post } from './post.reducer'


const rootReducer = combineReducers({
    app, // appReducer
    document, // document
    course, // course
    authentication,
    ranking, // ranking
    search,
    post
});

export default rootReducer;
