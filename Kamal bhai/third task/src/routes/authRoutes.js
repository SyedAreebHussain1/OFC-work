import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../views/auth/signup";
import SignUpAccountVerify from "../views/auth/signupaccountverify";
import Login from "../views/auth/login";
import EmailVerify from "../views/auth/emailverify"
// import Home from "../views/home";

const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupaccountverify" element={<SignUpAccountVerify />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/emailaccount" element={<EmailVerify />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
};
export default AuthRoutes;
