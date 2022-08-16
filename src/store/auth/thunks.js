import {
  singInWithGoogle,
  registerUserWithEmailAndPassword,
} from "../../firebase/provider";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthenticaction = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMsg));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMsg } =
      await registerUserWithEmailAndPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMsg }));
    dispatch(login({ uid, photoURL, email, displayName }));
  };
};
