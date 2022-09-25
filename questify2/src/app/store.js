import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../features/counter/counterSlice";
import authReducer from "../redux/auth/reducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
