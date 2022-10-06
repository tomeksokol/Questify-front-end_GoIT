import { createReducer } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser } from "./actions";
import { initialState } from "../../utils/constans";

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.user.status = "fetching";
    })
    .addCase(createUser.rejected, (state) => {
      state.user.status = "error";
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.user = {
        status: "success",
        name: action.payload.user.name,
        email: action.payload.user.email,
      };

      state.isUserAuthenticated = true;
    })
    .addCase(loginUser.pending, (state) => {
      state.user.status = "fetching";
    })
    .addCase(loginUser.rejected, (state) => {
      state.user.status = "error";
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = {
        status: "success",
        name: action.payload.user.name,
        email: action.payload.user.email,
      };

      state.isUserAuthenticated = true;
    })
    .addCase(logoutUser.fulfilled, (state) => {
           state.user = {
             status: "idle",
           };
 state.isUserAuthenticated = false;
    })
    .addCase(logoutUser.pending, (state) => {
          state.user = {
            status: "idle",        
          };
    })
    .addCase(logoutUser.rejected, (state) => {
           state.user = {
             status: "idle",          
      };
    //  state.isUserAuthenticated = false; 
    });

});


export default authReducer;
