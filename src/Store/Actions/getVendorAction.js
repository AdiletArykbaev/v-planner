import {
  GET_DETAIL_VENDOR,
  GET_DETAIL_VENDOR_SUCESS,
  GET_DETAIL_VENDOR_FAILED,
} from "../types";
import axios from "axios";

export const getDetailVendor = (id) => {
  return (dispatch) => {
    dispatch(fetchStart);

    axios
      .get(`http://localhost:7000/vendor/${id}`)
      .then((res) => {
        console.log("response in detail vendor", res);
        dispatch(fetchSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchFailed(err.message));
      });
  };
};
const fetchSuccess = (response) => {
  return {
    type: GET_DETAIL_VENDOR_SUCESS,
    payload: {
      data: response.data,
    },
  };
};

const fetchStart = () => ({
  type: GET_DETAIL_VENDOR,
});

const fetchFailed = (error) => ({
  type: GET_DETAIL_VENDOR_FAILED,
  payload: {
    error,
  },
});
