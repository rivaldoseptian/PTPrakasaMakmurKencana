import {
  DETAIL_COURSE,
  FETCH_COURSE,
  FETCH_GETCOURSE,
} from "../action/actionType";

const initialState = {
  courses: [],
  course: {},
  getCourses: [],
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE:
      return { ...state, courses: action.payload };
    case DETAIL_COURSE:
      return { ...state, course: action.payload };
    case FETCH_GETCOURSE:
      return { ...state, getCourses: action.payload };
    default:
      return state;
  }
}
