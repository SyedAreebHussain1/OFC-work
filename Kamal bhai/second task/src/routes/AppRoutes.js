import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "../views/User";
// import About from "../views/about";

const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
      <Route path="/about" element={<User/>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  );
};


export default AppRoute;
