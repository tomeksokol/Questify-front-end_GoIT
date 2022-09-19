import axios from 'axios';
import { userSlice } from '../redux/reducers/userReducer'; 


const loginURL = 'localhost:8155';

const loginUsers = ( email, password ) => (dispatch, getState) => {
  axios.post(loginURL, email, password).then(response => {
    dispatch(userSlice.actions.loginUser(response.data.data.user));
  })
};

export { loginUsers };