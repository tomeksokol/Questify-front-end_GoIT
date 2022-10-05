import axios from "axios";
import { JWT_TOKEN_STORAGE_KEY } from "../utils/constans.js";

export const authenticationApiClient = axios.create({
  baseURL: "https://questify-backend-goit.herokuapp.com/",
});

export const questifyApiClient = axios.create({
  baseURL: "https://questify-backend-goit.herokuapp.com/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem(JWT_TOKEN_STORAGE_KEY),
  },
});
