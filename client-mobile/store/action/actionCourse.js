import axios from "axios";
import { baseUrl } from "../../components/baseUrl";
import { DETAIL_COURSE, FETCH_COURSE, FETCH_GETCOURSE } from "./actionType";

export const fetchCourse = (payload) => {
  return {
    type: FETCH_COURSE,
    payload,
  };
};
export const GetCourse = (payload) => {
  return {
    type: FETCH_GETCOURSE,
    payload,
  };
};

export const detail = (payload) => {
  return {
    type: DETAIL_COURSE,
    payload,
  };
};

export const showCourse = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(baseUrl + "/course");
      const data = response.data;
      const action = fetchCourse(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailCourse = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseUrl + "/course/" + id);
      const data = response.data;
      const action = detail(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCourse = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(baseUrl + "/course", data);
      dispatch(showCourse());
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateCourse = (id, data) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(baseUrl + "/course/" + id, data);
      dispatch(showCourse());
    } catch (error) {
      console.log(error);
    }
  };
};

export const ShowGetcourse = (id) => {
  return async (dispatch, getState) => {
    try {
      const respose = await axios.get(baseUrl + "/getcourse/" + id);
      const data = respose.data;
      const action = GetCourse(data);
      console.log(action);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const CreateGetCourse = (id, StudentId) => {
  return async (dispatch, getState) => {
    const requestData = {
      StudentId: StudentId,
    };
    try {
      const response = await axios.post(
        baseUrl + "/getcourse/" + id,
        requestData
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteGetCourse = (id, StudentId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(baseUrl + "/getcourse/" + StudentId);
      dispatch(ShowGetcourse(id));
    } catch (error) {
      console.log(error);
    }
  };
};
