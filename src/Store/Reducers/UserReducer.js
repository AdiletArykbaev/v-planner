    import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNIN_SUCCESS,
  SIGNIN_USER,
  SIGNIN_FAILED,
} from "../types";

const initialState = {
  loading: false,
  userData: "",
  token: "твой токен",
  error: null,
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload?.data,

        token: action.payload?.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SIGNIN_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload?.data,

        token: action.payload?.token,
      };
    case SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
