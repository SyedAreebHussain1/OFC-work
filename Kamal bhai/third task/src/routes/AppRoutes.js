import React from "react";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<div>Home</div>} />
        <Route path="/user/registration" element={<div>About</div>} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
