import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_FAILED,
  GET_ALL_VENDORS_SUCESS,
} from "../types";
import axios from "axios";

export const getAllVendorsAction = () => {
  return (dispatch,getState) => {
    dispatch(fetchStart);
    const {userInfo} = getState()
    axios({
      method: "get",
      url: "http://147.182.224.144:8080/matches/vendors-from-match",
      headers: { "Content-Type": "multipart/form-data",Authorization:`Bearer ${userInfo.token}`},
    }).then((res) => {
        console.log("response in matchlist js",res)
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
