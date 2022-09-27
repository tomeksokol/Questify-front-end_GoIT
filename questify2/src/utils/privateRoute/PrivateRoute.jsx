import { Navigate } from "react-router-dom";
import { JWT_TOKEN_STORAGE_KEY } from "../constans";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem(JWT_TOKEN_STORAGE_KEY);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
