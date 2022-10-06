import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import { NotFound } from "./components/notFound/notFound";
//import './App.css';
//import Landing from "./pages/LandingPage/Landing";
// import LandingPage from "./pages/LandingPage/LandingPage";

// import MainPage from "./pages/mainPage/mainPage";
import { PrivateRoute } from "./utils/privateRoute/PrivateRoute";
const MainPage = lazy(() => import("./pages/mainPage/mainPage"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <LandingPage />
          </>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
