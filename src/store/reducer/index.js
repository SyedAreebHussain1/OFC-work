import { combineReducers } from "redux";

import authSignUp from "./authSignUp";
import authSignUpAccountVerify from "./authSignUpAccountVerify"
import authForgetPassword from "./authForgetPassword";
import authFpCodeVerify from "./authFpCodeVerify";
import authResetPassword from "./authResetPassword";
import authSignIn from "./authSignIn";

export default combineReducers({ authSignUp, authSignUpAccountVerify, authForgetPassword, authFpCodeVerify, authResetPassword,authSignIn });
