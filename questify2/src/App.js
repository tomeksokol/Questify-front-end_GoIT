import React from "react";
import { Route, Routes } from "react-router";
//import './App.css';
//import Landing from "./pages/LandingPage/Landing";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
          </>
        }
      />
    </Routes>
  );
};

export default App;
