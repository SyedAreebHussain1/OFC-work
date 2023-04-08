import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../views/auth/signup";
import SignUpAccountVerify from "../views/auth/signupaccountverify";
import Login from "../views/auth/login";
import EmailVerify from "../views/auth/emailverify";
import ErrPage from "../views/ErrorPage";

const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accountverify" element={<SignUpAccountVerify />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/emailaccount" element={<EmailVerify />} />
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </div>
  );
};
export default AuthRoutes;
