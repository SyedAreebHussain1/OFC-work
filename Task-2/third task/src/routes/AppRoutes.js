import React from "react";
import { Routes, Route } from "react-router-dom";
import UserData from "../views/userProfileData";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<UserData/>} />
        <Route path="/user/registration" element={<div>About</div>} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
