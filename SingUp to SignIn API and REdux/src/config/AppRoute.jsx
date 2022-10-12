import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUp from "../components/SignUpFrom/SignUpFrom";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute