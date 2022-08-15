import { singInWithGoogle } from "../../firebase/provider";
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
