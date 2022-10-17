import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import Home from "../components/Home/Home";
import About from "../components/About/About"
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage"
// import Header from "../components/Header/Header"
import Verify from "../components/Verify/Verify";
import VerifyEmail from "../components/VerifyEmail/VerifyEmail";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import UserProfile from "../components/UserProfile/UserProfile"

const AppRoute = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                {/* <Route path="/" element={<Home />} >
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    </Route>
                <Route path="*" element={<ErrorPage />} /> */}
                <Route exact path="/" element={<SignUpForm />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/verifyemail" element={<VerifyEmail />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute