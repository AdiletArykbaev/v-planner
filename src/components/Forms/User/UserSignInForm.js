import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { schemaUserSignIn } from "../../../validation/schemas";
import f from "../../../validation/fieldName";
import { ModalContext } from "../../../context/ModalContext";
import { AuthContext } from "../../../context/AuthContext";
import { loginAction } from "../../../Store/Actions/AuthAction.js";
import { useDispatch, useSelector } from "react-redux";
const UserSignInForm = () => {
  const modal = useContext(ModalContext);
  const auth = useContext(AuthContext);
  const { userData } = useSelector((state) => state.userInfo);
  const { token } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schemaUserSignIn()),
  });

  const signIn = (data) => {
    const reqData = {
      mail: data[f.email],
      password: data[f.password],
    };
    dispatch(loginAction(reqData));

    modal.destroy();
  };

  const isValidField = (field) => !errors[field];
  const getErrorField = (field) => errors[field]?.message;
  useEffect(() => {
    /*email,
              firstName,
              lastName,
              phone,
              avatar,
              nickname,
              partnersFirstName,
              partnersLastName,
              engagementDate,
              weddingDate,
              location,
              countGuest,
              budget,
              token*/
    if (token.length > 10) {
      console.log("userData", userData);
      auth.login(
        process.env.REACT_APP_ROLE_USER,
        userData.mail,
        userData.firstName,
        userData.surname,

        "avata  r",
        userData.phone,
        userData.nickname,
        userData.partnersFirstName
      );
    }
  }, [token]);
  return (
    <form onSubmit={handleSubmit(signIn)}>
      <Input
        type="text"
        placeholder="Email"
        isValid={isValidField(f.email)}
        error={getErrorField(f.email)}
        register={register(f.email)}
      />
      <Input
        type="password"
        placeholder="Password"
        isValid={isValidField(f.password)}
        error={getErrorField(f.password)}
        register={register(f.password)}
      />
      <Button
        className="btn btn-accent m-t-24 d-block w-100"
        disabled={!isValid}
      >
        Sign In
      </Button>
    </form>
  );
};

export default UserSignInForm;