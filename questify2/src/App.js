import React from 'react';

// import './App.css';
import { MainPage } from './pages/mainPage/mainPage';
import { Route, Routes } from "react-router";
import Landing from "./pages/LandingPage/Landing";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing />
            <div className="App">
            <MainPage/>
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
