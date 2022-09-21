import {
  authenticationApiClient,
  questifyApiClient,
} from './client';
import { JWT_TOKEN_STORAGE_KEY } from '../utils/constans.js';

export const createUserRequest = async (payload) => {
  const { data } = await authenticationApiClient.post('/register', payload);

  localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);

  return data;
};

export const authenticateUserRequest = async (payload) => {
  const { data } = await authenticationApiClient.post('/login', payload); // in case of adding login and register

  localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);

  return data;
};

export const getCurrentUserRequest = async () => {
  const { data } = await questifyApiClient.get('/user/current'); // in case of adding get on current user data
  console.log(data);
  return data;
};