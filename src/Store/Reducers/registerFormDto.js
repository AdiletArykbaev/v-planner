import {
  GET_VENDOR_INFO,
  GET_COMPANY_INFO,
  GET_SERVICE_INFO,
  GET_COMPANY_DETAIL,
  VENDOR_SIGNIN_SUCCESS,
  VENDOR_SIGNIN_FAILED,
} from "../types";

const initialState = {
  loading: false,
  vendorName: "",
  companyInfo: "",
  serviceInfo: "",
  companyDetail: "",
  error: null,
};

export default function registerFormDto(state = initialState, action) {
  console.log("data in action", action.payload);
  switch (action.type) {
    case GET_VENDOR_INFO:
      return {
        ...state,
        vendorName: action.payload?.vendorName,
      };
    case GET_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload?.companyInfo,
      };
    case GET_SERVICE_INFO:
      return {
        ...state,
        loading: false,
        serviceInfo: action.payload.serviceInfo,
      };
    case GET_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: action.payload.serviceInfo,
      };
    case VENDOR_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload?.data,

        token: action.payload?.token,
      };
    case VENDOR_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
