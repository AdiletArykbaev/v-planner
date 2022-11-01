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
    const test = {
      "firstName": "firstName",
      "surname": "surname",
      "phoneNumber": "phoneNumber",
      "username":"username",
      "email": "workadilet0110@gmail.com",
      "password": "huskar275206",
      "city":"city",
      "weddingDate": "2020-10-10",
      "weddingAddress": "asd",
      "amountOfGuests": 122,
      "isEngagement": 1,
      "engagementDate": "2020-10-10",
      "engagementAddress":
          "engagementAddress",
      "description": "description"
    }
    // reqBody.append("firstName", firstName);
    // reqBody.append("surname", lastName);
    // reqBody.append("password", password);
    // reqBody.append("weddingDate", weddingDate);
    // reqBody.append("mail", email);
    // reqBody.append("engagementPlace", location.value);
    // reqBody.append("engagementDate", engagementDate);
    // reqBody.append("engagement", true);
    // reqBody.append("budget", customBudget);
    // reqBody.append("countOfGuest", countGuest);
    // reqBody.append("username", nickname);
    // reqBody.append("partnerFirstName", partnersFirstName);
    // reqBody.append("partnerSecondName", partnersLastName);
    const obj = {
      firstName:firstName,
      surname: lastName,
      password:password,
      weddingDate:weddingDate,
      email:email,
      engagementDate:engagementDate,
      engagementAddress:location.value,
      isEngagement:1,
      // budget:"2000$",
      amountOfGuests:countGuest,
      phoneNumber: "123123",
      city:location.value,
      username:nickname,
      description:partnersFirstName
    }
    const json = JSON.stringify(obj)
    const blob = new Blob([json], {
      type: 'application/json'
    });
    reqBody.append("createClientModel",blob );

    reqBody.append("avatar", avatar[0]);

    axios({
      method: "post",
      url: "http://147.182.224.144:8080/clients/create",
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
        console.log(res,"res in create client")
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
      data: response.data?.result,
      token: response.data?.result.jwt,
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
