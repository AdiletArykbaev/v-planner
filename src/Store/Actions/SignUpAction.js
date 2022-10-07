import { SIGNIN_SUCCESS, SIGNIN_USER, SIGNIN_FAILED } from "../types";
import axios from "axios";

export const signUpAction = ({
  firstName,
  lastName,
  email,

  nickname,
  partnersFirstName,
  partnersLastName,
  engagementDate,
  weddingDate,
  location,
  countGuest,
  customBudget,
  password,
}) => {
  // console.log(
  //   "data in sign in Action",
  //   firstName,
  //   lastName,
  //   nickname,
  //   partnersFirstName,
  //   partnersLastName,
  //   engagementDate,
  //   weddingDate,
  //   location.value,
  //   countGuest,
  //   customBudget,
  //   password
  // );
  return (dispatch) => {
    dispatch(LoginStart);

    axios
      .post(`http://localhost:7000/auth/register`, {
        firstName,
        surname: lastName,
        username: nickname,
        partnerFirstName: partnersFirstName,
        partnerSecondName: partnersLastName,
        mail: email,
        engagementDate,
        engagement: true,
        weddingDate: weddingDate,
        engagementPlace: location.value,
        countOfGuest: countGuest,
        budget: customBudget,
        password,
      })
      .then((res) => {
        dispatch(signInSuccess(res));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const signInSuccess = (response) => {
  console.log("action worked");
  console.log("response in signin func", response);

  return {
    type: SIGNIN_SUCCESS,
    payload: {
      data: response.data?.database,
      token: response.data?.jwt,
    },
  };
};

const LoginStart = () => ({
  type: SIGNIN_USER,
});

const addTodoFailure = (error) => ({
  type: SIGNIN_FAILED,
  payload: {
    error,
  },
});
