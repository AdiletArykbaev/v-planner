import { Navigate, Route, Routes } from "react-router-dom";
import AccountPageLayout from "../components/Layouts/AccountPageLayout";
import CabinetLayout from "../components/Layouts/CabinetLayout";
import MainPageLayout from "../components/Layouts/MainPageLayout";
import About from "../pages/About";
import UserAccount from "../pages/Account/UserAccount";
import Help from "../pages/Help";
import Policy from "../pages/Policy";
import Rules from "../pages/Rules";
import Matchlist from "../pages/Matchlist";
import Faq from "../pages/Faq";
import UserQuotes from "../pages/Quotes/UserQuotes";
import {useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import UserOrders from "../pages/Orders/UserOrders";
import VendorList from "../pages/VendorList";
import VendorItem from "../pages/VendorItem";
import UserChat from "../pages/Chat/UserChat";
import { connect } from "react-redux";
import {getAllVendorsAction} from "../Store/Actions/GetAllVendors";
function UserRouter(props) {
  const auth = useContext(AuthContext);
  const url = props.userDto.clientModel?.photoModel?.name
  props.getAll()
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CabinetLayout name={props.userDto.firstName} image={url} />
        }
      >
        <Route path="/" element={<MainPageLayout />}>
          <Route path="/" element={<Navigate to="/matchlist" />} />
          <Route path="/matchlist" element={props.loading ?   <div>Loading....</div>:<Matchlist />}/>}
          {Object.keys(auth.user.profile.likes.users).length >= 10 && (
            <>
              <Route path="/quotes" element={<UserQuotes />} />
              <Route path="/orders" element={<UserOrders />} />
              <Route path="/vendor" element={<VendorList />} />
              <Route path="/vendor/:id" element={<VendorItem />} />
              <Route path="/chat" element={<UserChat />} />
              <Route path="/chat/:id" element={<UserChat />} />
            </>
          )}
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/account" element={<AccountPageLayout />}>
          <Route path="/account" element={<UserAccount />} />
          <Route path="/account/:id" element={<UserAccount />} />
          <Route path="*" element={<Navigate to="/account" />} />
        </Route>
      </Route>
    </Routes>
  );
}
const mapStateToProps = function (state) {
  return {
    userDto:state.userInfo.userData,
    token:state.userInfo.token,
    loading:state.matchList.loading

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAllVendorsAction()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserRouter);
