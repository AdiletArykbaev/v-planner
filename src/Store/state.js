import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./Reducers/UserReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userInfo: userReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
