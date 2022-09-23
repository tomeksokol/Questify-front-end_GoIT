import { authenticationApiClient, questifyApiClient } from "./client";
import { JWT_TOKEN_STORAGE_KEY } from "../utils/constans.js";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export const createUserRequest = async (payload) => {

  try {
    const { data } = await authenticationApiClient.post("/auth/register", payload); //change to register
    //console.log(data)
    localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);
    //Notify.success("You are loogedin");
    return data;
  } catch (error) {
    console.log(error.message);
    Loading.remove();
    if (error.message === "Request failed with status code 401") {
      Report.failure(
        "Unauthorized",
        "Email or password is wrong",
      );
    } else {
      Notify.failure("Oopss something going wrong!");
    }
    
  }
  
};

export const authenticateUserRequest = async (payload) => {
  const { data } = await authenticationApiClient.post("/auth/register", payload); // in case of adding login and register

  localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);

  return data;
};

export const getCurrentUserRequest = async () => {
  const { data } = await questifyApiClient.get("/auth/current"); // in case of adding get on current user data
  console.log(data);
  return data;
};
