import { combineReducers } from "redux";

import studentReducer from "./Student";
import courseReducer from "./Course";

const rootReducer = combineReducers({
  student: studentReducer,
  course: courseReducer,
});

export default rootReducer;
