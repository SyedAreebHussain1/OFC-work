import React from "react";
import { Routes, Route } from "react-router-dom";


const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  );
};
export default AppRoute;
