import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro/Intro";
import React from "react";
import Login from "../pages/Login/Login";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
