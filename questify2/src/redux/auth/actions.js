import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUserRequest,
  authenticateUserRequest,
  getCurrentUserRequest,
  logoutCurrentUser,
} from "../../api/request.js";

export const createUser = createAsyncThunk(
  "auth/CREATE_USER",
  createUserRequest,
);

export const loginUser = createAsyncThunk(
  "auth/LOGIN_USER",
  authenticateUserRequest,
);

export const currentUser = createAsyncThunk(
  "auth/CURRENT_USER",
  getCurrentUserRequest,
);
export const logoutUser = createAsyncThunk(
  "auth/LOGOUT_USER",
  logoutCurrentUser,
)