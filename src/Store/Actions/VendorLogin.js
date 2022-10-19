import { LOGIN_VENDOR, VENDOR_SUCCESS, VENDOR_FAILED } from "../types";
import axios from "axios";

export const loginVendorAction = (mail, password) => {
  console.log(mail, password);
  return (dispatch) => {
    dispatch(LoginStart);

    axios
      .post(`http://localhost:7000/vendor/login`, {
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

  return {
    type: VENDOR_SUCCESS,
    payload: {
      data: response.data.userData,
      token: response.data?.token,
    },
  };
};

const LoginStart = () => ({
  type: LOGIN_VENDOR,
});

const addTodoFailure = (error) => ({
  type: VENDOR_FAILED,
  payload: {
    error,
  },
});
