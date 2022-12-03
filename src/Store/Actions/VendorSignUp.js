import { VENDOR_SIGNIN, VENDOR_SUCCESS, VENDOR_FAILED } from "../types";
import axios from "axios";

export const signUpAction = (data) => {
  console.log("data in signUpAction", data);

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
      photoStyle:data.type.value,
      serviceModels:[
        {
          name: data.name,
          price:data.priceRange.value,
        }
      ]


    }

    const json = JSON.stringify(obj)
    const blob = new Blob([json], {
      type: 'application/json'
    });

    reqBody.append("createVendorModel",blob);
    reqBody.append("avatar", data.avatar[0]);
    reqBody.append("companyAvatar", data.file[0]);
    for (const image of data.images) {
      reqBody.append("photoAndVideos",image);
    }

    axios({
      method: "post",
      url: "http://147.182.224.144:8080/vendors/create",
      data: reqBody,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
        console.log("response in vendro",res)
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
      data: response.data?.result,
      token: response.data?.result.jwt,
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
