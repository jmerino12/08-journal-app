import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //'not-auth', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; //'not-auth', 'authenticated', 'checking'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMsg = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; //'not-auth', 'authenticated', 'checking'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMsg = payload.errorMsg;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
