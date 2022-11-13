import axios from "axios";

import { SIGNUP } from "../../constants/authConstants";
import { SIGNUP_URL } from "../../constants/authConstants";

import { SIGNUP_ACCOUNTVERIFY } from "../../constants/authConstants";
import { SIGNUP_ACCOUNTVERIFY_URL } from "../../constants/authConstants";

import { SIGNIN } from "../../constants/authConstants";
import { SIGNIN_URL } from "../../constants/authConstants";

import { VERIFYEMAIL } from "../../constants/authConstants";
import { VERIFYEMAIL_URL } from "../../constants/authConstants";

export const signUpAction = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`https://backend.squarepro.net/${SIGNUP_URL}`, data)
      .then((res) => {
        dispatch({ type: SIGNUP, payload: res });
        onSuccess(res.data.message);
      })
      .catch((err) => {
        onFailure(err.response);
      });
};

export const signUpAccountVerifyAction = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`https://backend.squarepro.net/${SIGNUP_ACCOUNTVERIFY_URL}`, data)
      .then((res) => {
        dispatch({ type: SIGNUP_ACCOUNTVERIFY, payload: res });
        onSuccess(res.response);
      })
      .catch((err) => {
        onFailure(err.response);
      });
};

export const logInAction = (data, onSuccess, onFailure) => {
  // console.log("sadasd", data);
  return (dispatch) =>
    axios
      .post(`https://backend.squarepro.net/${SIGNIN_URL}`, data)
      .then((res) => {
        dispatch({ type: SIGNIN, payload: res?.data?.data?.token });
        localStorage.setItem("token", res?.data?.data?.token);
        onSuccess(res.response);
      })
      .catch((err) => {
        onFailure(err.response);
        // onFailure(err.response);
      });
};

export const emailVerifyAction = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`https://backend.squarepro.net/${VERIFYEMAIL_URL}`, data)
      .then((res) => {
        dispatch({ type: VERIFYEMAIL, payload: res });
        onSuccess(res.response);
      })
      .catch((err) => {
        onFailure(err.response);
      });
};

// axios({
//     method: 'post',
//     url: '/login',
//     data: {
//       firstName: 'Finn',
//       lastName: 'Williams'
//     }
//   })
// };

// import { SIGNUP } from "../../constants/authConstants";
// import { SIGNUP_URL } from "../../constants/authConstants";
// export const signUpAction = (data) => {
// //   console.log("hello world");
//   // console.log('dataActionSignUp', data)
//   return (dispatch) =>
//     fetch(`https://backend.squarepro.net/${SIGNUP_URL}`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//     //   .then((json)=>console.log('json',json))
//       .then((json) => dispatch({ type: SIGNUP, payload: json }));
// };
