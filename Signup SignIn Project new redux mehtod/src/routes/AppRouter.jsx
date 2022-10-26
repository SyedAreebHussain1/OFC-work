import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../views/Auth/SignUp";
import SignUpAccountVerify from "../views/Auth/SignUpAccountVerify"
import ForgotPass from "../views/Auth/ForgotPass"
import FpCodeVerify from "../views/Auth/FpCodeVerify"
import ResetPassword from "../views/Auth/ResetPassword";
import Login from "../views/Auth/Login/Login";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignUp />} />
                <Route path="/account_verify" element={< SignUpAccountVerify />} />
                <Route path="/forgot_password" element={< ForgotPass />} />
                <Route path="/fp_code_verify" element={< FpCodeVerify />} />
                <Route path="/reset_password" element={< ResetPassword />} />
                <Route path="/login" element={< Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute