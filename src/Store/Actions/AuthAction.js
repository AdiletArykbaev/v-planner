import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import axios from "axios";

export const loginAction = ({ email, password }) => {
  return (dispatch) => {
    dispatch(LoginStart);

    axios
      .post(`http://147.182.224.144:8080/user/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res,"response in res")
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const loginSuccess = (response) => {

  return {
    type: LOGIN_SUCCESS,
    payload: {
      data: response.data.userData,
      token: response.data?.result.jwt,
    },
  };
};

const LoginStart = () => ({
  type: LOGIN_USER,
});

const addTodoFailure = (error) => ({
  type: LOGIN_FAILED,
  payload: {
    error,
  },
});
