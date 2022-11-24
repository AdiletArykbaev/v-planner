import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./Reducers/UserReducer";
import VendorReducer from "./Reducers/VendorReducer";
import matchListReducer from "./Reducers/MatchList";
import { getDetailVendor } from "./Actions/getVendorAction";
import LikedVendors from "./Reducers/LikedVendors";

import thunk from "redux-thunk";

const reducer = combineReducers({
  userInfo: userReducer,
  vendorInfo: VendorReducer,
  matchList: matchListReducer,
  myVendors:LikedVendors
});
export const store = createStore(reducer, applyMiddleware(thunk));
