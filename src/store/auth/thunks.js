import {
  singInWithGoogle,
  registerUserWithEmailAndPassword,
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../firebase/provider";
import { checkingCredentials, logout, login } from "./";

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

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMsg, displayName } =
      await loginWithEmailAndPassword(email, password);
    if (!ok) return dispatch(logout({ errorMsg }));
    dispatch(login({ uid, photoURL, email, displayName }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
