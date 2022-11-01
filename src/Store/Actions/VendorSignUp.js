import { VENDOR_SIGNIN, VENDOR_SUCCESS, VENDOR_FAILED } from "../types";
import axios from "axios";

export const signUpAction = (data) => {
  console.log("data in signUpAction", data);
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
    const obj = {
      firstName:  data.name,
      surname:  data.lastName,
      phoneNumber: data.phone,
      username:"username",
      email: data.email,
      password: data.password,
      city: data.state.value,
      companyName: data.name,
      fieldOfActivity: data.type.value,
      typeOfService:  data.type.value,
      priceRange:  data.priceRange.value,
      weddingActivity: data.activities.value,
      companyTitle: data.title,
      companyDescription:data.description,
      aboutCompany:data.aboutCompany,
      aboutTeam:data.aboutTeam,
      photoStyle:data.type.value

    }
    const json = JSON.stringify(obj)
    const blob = new Blob([json], {
      type: 'application/json'
    });

    reqBody.append("createVendorModel",blob);
    reqBody.append("avatar", data.avatar[0]);
    reqBody.append("companyAvatar", data.file[0]);
    reqBody.append("photosAndVideos", data.images);

    // reqBody.append("firstName", data.name);
    // reqBody.append("surname", data.lastName);
    // reqBody.append("companyName", data.name);
    // reqBody.append("aboutCompany", data.aboutCompany);
    // reqBody.append("aboutTeam", data.aboutTeam);
    // reqBody.append("companyTitle", data.title);
    // reqBody.append("companyDescription", data.description);
    // reqBody.append("fieldOfActivity", data.type.value);
    // reqBody.append("typeOfService", data.type.value);
    // reqBody.append("photoAndVideoStyle", data.type.value);
    //
    // reqBody.append("weddingActivity", data.activities.value);
    // reqBody.append("mail", data.email);
    // reqBody.append("password", data.password);
    // reqBody.append("phoneNumber", data.phone);
    // reqBody.append("priceRange", data.priceRange.value);
    // reqBody.append("city", data.state.value);
    // reqBody.append("avatar", data.avatar[0]);
    // reqBody.append("yearsOnMarket", data.amount);
    // reqBody.append("instagram", data.instagram);
    // reqBody.append("Facebook", data.facebook);
    // reqBody.append("Youtube", data.youtube);
    // reqBody.append("Twitter", data.twitter);
    // reqBody.append("photos", data.images);

    axios({
      method: "post",
      url: "http://147.182.224.144:8080/vendors/create",
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
    type: VENDOR_SUCCESS,
    payload: {
      data: response.data?.database,
      token: response.data?.jwt,
    },
  };
};

const LoginStart = () => ({
  type: VENDOR_SIGNIN,
});

const addTodoFailure = (error) => ({
  type: VENDOR_FAILED,
  payload: {
    error,
  },
});
