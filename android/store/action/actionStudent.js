import axios from "axios";
import { baseUrl } from "../../components/baseUrl";
import { DETAIL_STUDENT, FETCH_STUDENT } from "./actionType";

export const fetchStudent = (payload) => {
  return {
    type: FETCH_STUDENT,
    payload,
  };
};

export const detailFetchStudent = (payload) => {
  return {
    type: DETAIL_STUDENT,
    payload,
  };
};

export const showStudent = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(baseUrl + "/student");
      const data = response.data;
      const action = fetchStudent(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addStudent = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + "/student", data);
      dispatch(showStudent());
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseUrl + "/student/" + id);
      const data = response.data;
      const action = detailFetchStudent(data);
      console.log(action);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateStudent = (id, data) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(baseUrl + "/student/" + id, data);
      dispatch(showStudent());
    } catch (error) {
      console.log(error);
    }
  };
};
