import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cover from "./Components/Cover";
import Auth from "./Auth";
import LoginSuccess from "./Components/LogInSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/login/*" element={<Auth />} />
          <Route path="/login-success" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
