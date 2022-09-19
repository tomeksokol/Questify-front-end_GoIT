import React from 'react';
import { Route, Routes } from "react-router";
//import './App.css';
import Landing from "./pages/LandingPage/Landing";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing />
          </>
        }
      />
    </Routes>
  );
};

export default App;
