import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro/Intro";
import React from "react";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
