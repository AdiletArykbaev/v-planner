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
  avatar,
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
    const reqBody = new FormData();
    reqBody.append("firstName", firstName);
    reqBody.append("surname", lastName);
    reqBody.append("password", password);
    reqBody.append("weddingDate", weddingDate);
    reqBody.append("mail", email);
    reqBody.append("engagementPlace", location.value);
    reqBody.append("engagementDate", engagementDate);
    reqBody.append("engagement", true);
    reqBody.append("budget", customBudget);
    reqBody.append("countOfGuest", countGuest);
    reqBody.append("username", nickname);
    reqBody.append("partnerFirstName", partnersFirstName);
    reqBody.append("partnerSecondName", partnersLastName);
    reqBody.append("file", avatar[0]);

    axios({
      method: "post",
      url: "http://localhost:7000/auth/register",
      data: reqBody,
      headers: { "Content-Type": "multipart/form-data" },
    })
      // .post(`http://localhost:7000/auth/register`, {
      //   firstName,
      //   surname: lastName,
      //   username: nickname,
      //   partnerFirstName: partnersFirstName,
      //   partnerSecondName: partnersLastName,
      //   mail: email,
      //   engagementDate,
      //   engagement: true,
      //   weddingDate: weddingDate,
      //   engagementPlace: location.value,
      //   countOfGuest: countGuest,
      //   budget: customBudget,
      //   password,
      // })
      .then((res) => {
        dispatch(signInSuccess(res));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const signInSuccess = (response) => {
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
