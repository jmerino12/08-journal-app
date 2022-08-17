import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { jorunalSlice } from "./journal";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: jorunalSlice.reducer,
  },
});
