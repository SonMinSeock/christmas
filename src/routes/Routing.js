import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro/Intro";
import React from "react";
import Login from "../pages/Login/Login";
import Account from "../pages/Account/Account";
import CreateProfile from "../pages/CreateProfile/CreateProfile";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createProfile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
