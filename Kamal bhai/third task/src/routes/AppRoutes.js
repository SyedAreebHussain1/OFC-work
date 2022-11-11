import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/home";
import About from "../views/about"
// import SiteBar from '../views/dashboard/index'
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/user/registration" element={<About />} />
        {/* <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard" element={<Home />} /> */}
      </Routes>
    </div>
  );
};
export default AppRoutes;
