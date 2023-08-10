import { DETAIL_STUDENT, FETCH_STUDENT } from "../action/actionType";

const initialState = {
  students: [],
  student: {},
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENT:
      return { ...state, students: action.payload };
    case DETAIL_STUDENT:
      return { ...state, student: action.payload };
    default:
      return state;
  }
}
