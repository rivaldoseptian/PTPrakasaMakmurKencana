import { combineReducers } from "redux";

import studentReducer from "./Student";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
