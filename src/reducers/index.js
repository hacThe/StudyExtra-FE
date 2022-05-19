import { combineReducers } from "redux";
import { course } from "./course.reducer";
import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { exam, resultExam } from "./exam.reducer";
import { document } from "./document.reducer";
import { ranking } from "./ranking.reducer";
import { search } from "./search.reducer";
import { post } from "./post.reducer";
import { userData } from "./account.reducer";
import { userNotifications } from "./notification.reducer";
import {user} from "./user.reducer";
import {article} from "./article.reducer";
import { searchAnnouncement } from './searchAnnouncement.reducer'
import { transactionReducer } from './transaction.reducer'
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
  userData, 
  userNotifications,
  article,
  searchAnnouncement,
  transactionReducer,
  user
});

export default rootReducer;
