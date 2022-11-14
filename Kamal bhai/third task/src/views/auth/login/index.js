import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInAction } from "../../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

import "../style.css";

const Login = () => {
  let r = (Math.random() + 1).toString(36).substring(7);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const [body, setBody] = useState({
    email: null,
    password: null,
    deviceToken: r,
  });
  const state = useSelector((state) => state?.authReducer);
  console.log("state login", state?.signin);
  // console.log("state login", state?.signin?.data?.statusCode);
  const onSuccess = (message) => {
    // setMsg(message);
    console.log('mmsg',message)
    // console.log("msg", msg);
    alert("Successfully Signin");
    navigate("/dashboard");
  };
  const onFailure = (message) => {
    // setError(message);
    console.log("errorr", message);
      if (message.message == "Password Must Contain a number from 0-9") {
      alert(message.message);
    } else if (message.message == "Please verified your account") {
        alert(message.message);
        navigate("/emailaccount");
    }else{
      alert(message?.message)
    }
  };

  // const onKeyDownHandler = e => {
  //   if (e.keyCode === 13) {
  //     logInFun();
  //   }
  // };
  // const detectKeyDown = (e) => {
  //   // e.preventDefault();
  //   console.log(body);
  //   console.log("clicked key:", e.key);
  //   if (e.key === "Enter") {
  //     logInFun();
  //   }
  // };
  // console.log("body=>", body);

  const logInFun = (e) => {
    e.preventDefault();
    console.log("body=>", body);
    if (body.email !== null && body.password !== null) {
      dispatch(logInAction(body, onSuccess, onFailure));
    }
  };

  const signUp = () => {
    navigate("/signup");
  };
  // useEffect(() => {
  //   if (state?.signin?.data?.statusCode == 201) {
  //     alert(state?.signin?.data?.message);
  //     // navigate('/dashboard')
  //   }
  // }, [state?.signin]);

  // useEffect(() => {
  //   if (error?.statusCode == 400) {
  //     alert(error?.message);
  //   } else if (error?.statusCode == 401) {
  //       alert(error?.message);
  //       navigate("/emailaccount");
  //   }
  // }, [error]);

  // useEffect(() => {
  //   document.addEventListener("keypress", detectKeyDown, true);
  // }, []);

  return (
    <div className="mainDiv">
      <div className="box">
        <div className="title-box">
          {/* <!-- <img src="" alt="facebook" /> --> */}
          <h2>Square pro</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="form-box">
          <form onSubmit={logInFun}>
            <input
              value={body.email}
              type="text"
              placeholder="Email address or mobile number"
              name="email"
              onChange={(text) =>
                setBody({ ...body, email: text.target.value })
              }
            />
            <input
              value={body.password}
              type="password"
              placeholder="password"
              onChange={(text) =>
                setBody({ ...body, password: text.target.value })
              }
              name="password"
            />
            <button
              type="submit"
            >
              Login
            </button>
            {/* <input className="button" type="submit" value="Login" /> */}
            <a>Forgotten password</a>
          </form>
          <hr />
          <div className="create-btn">
            <button onClick={signUp}>Create new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
