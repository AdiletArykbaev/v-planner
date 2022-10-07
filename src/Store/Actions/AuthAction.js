import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import axios from "axios";

export const loginAction = ({ mail, password }) => {
  return (dispatch) => {
    dispatch(LoginStart);

    axios
      .post(`http://localhost:7000/auth/login`, {
        mail,
        password,
      })
      .then((res) => {
        console.log("token", res.data?.token);
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const loginSuccess = (response) => {
  console.log("response in func", response);

  return {
    type: LOGIN_SUCCESS,
    payload: {
      data: response.data.userData,
      token: response.data?.token,
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
