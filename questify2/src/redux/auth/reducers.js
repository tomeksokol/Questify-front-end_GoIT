import { createReducer } from '@reduxjs/toolkit';
import { createUser, loginUser, currentUser } from './actions';
import { initialState } from '../../utils/constans.js';

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.user.status = 'fetching';
    })
    .addCase(createUser.rejected, (state) => {
      state.user.status = 'error';
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.user = {
        status: 'success',
        name: action.payload.user.name,
        email: action.payload.user.email,
      };

      state.isUserAuthenticated = true;
    })

    .addCase(loginUser.pending, (state) => {
      state.user.status = 'fetching';
    })
    .addCase(loginUser.rejected, (state) => {
      state.user.status = 'error';
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = {
        status: 'success',
        name: action.payload.user.name,
        email: action.payload.user.email,
      };

      state.isUserAuthenticated = true;
    })
    .addCase(currentUser.pending, (state) => {
      state.user.status = 'fetching';
    })
    .addCase(currentUser.rejected, (state) => {
      state.user.status = 'error';
    })
    .addCase(currentUser.fulfilled, (state, action) => {
      state.user = {
        status: 'success',
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
    })
});

export default authReducer;