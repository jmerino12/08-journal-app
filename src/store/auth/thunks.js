import { checkingCredentials } from "./";

export const checkingAuthenticaction = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
