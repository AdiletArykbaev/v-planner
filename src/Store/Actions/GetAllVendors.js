import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_FAILED,
  GET_ALL_VENDORS_SUCESS,
} from "../types";
import axios from "axios";

export const getAllVendorsAction = () => {
  return (dispatch) => {
    dispatch(fetchStart);

    axios
      .get(`http://localhost:7000/getAllVendors`)
      .then((res) => {
        dispatch(fetchSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchFailed(err.message));
      });
  };
};
const fetchSuccess = (response) => {
  return {
    type: GET_ALL_VENDORS_SUCESS,
    payload: {
      data: response.data,
    },
  };
};

const fetchStart = () => ({
  type: GET_ALL_VENDORS,
});

const fetchFailed = (error) => ({
  type: GET_ALL_VENDORS_FAILED,
  payload: {
    error,
  },
});
